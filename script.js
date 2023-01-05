console.log("Welcome to Spotify");

// initialize the Variables
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let audioElement = new Audio("songs/teri mitti.mp3");
let gif = document.getElementById("gif");
let songName = document.getElementsByClassName("songName");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Tum hi ho",
    filePath: "songs/tum hi ho.mp3",
    coverPath: "covers/tum hi ho.jpg",
  },
  {
    songName: "Dear Mama",
    filePath: "songs/dear mama.mp3",
    coverPath: "covers/Dear-Mama-Punjabi.jpg",
  },
  {
    songName: "Teri Ore",
    filePath: "songs/teri ore.mp3",
    coverPath: "covers/teri ore.jpg",
  },
  {
    songName: "Baarish me tum",
    filePath: "songs/baarish me tum.mp3",
    coverPath: "covers/baarish me tum.jpg",
  },
  {
    songName: "Same Beef",
    filePath: "songs/same beef.mp3",
    coverPath: "covers/same beef.jpg",
  },
  {
    songName: "The Last Ride",
    filePath: "songs/the last ride.mp3",
    coverPath: "covers/the last ride.jpg",
  },
  {
    songName: "Chann Sitare",
    filePath: "songs/chann sitare.mp3",
    coverPath: "covers/chann sitare.jpg",
  },
  {
    songName: "Qismat-2",
    filePath: "songs/qismat 2.mp3",
    coverPath: "covers/qismat 2.jpg",
  },
  {
    songName: "Filhal-2",
    filePath: "songs/filhal 2.mp3",
    coverPath: "covers/Filhaal2_Mohabbat_cover_art.jpg",
  },
  {
    songName: "Teri Mitti",
    filePath: "songs/teri mitti.mp3",
    coverPath: "covers/teri mitti.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  console.log(
    element
      .getElementsByClassName("songName")[0]
      .nextElementSibling.childNodes[0].firstElementChild.setAttribute(
        "name",
        songs[i].songName
      )
  );
  // document
  //   .getElementsByClassName("songItemPlay")[0]
  //   .setAttribute("name", songs[i].songName);
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events

audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar by timeupdate event listener
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();

      let songName = e.currentTarget.getAttribute("name");

      // let index = songs.findIndex((item) => item.songName == songName);

      // console.log(songName);

      // console.log(songIndex);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songName}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", (e) => {
  // masterSongName.innerText = songs[songIndex].songName;
  // console.log(masterSongName);

  audioElement.src = `songs/${songName}.mp3`;
  // masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", (e) => {
  let songName = e.currentTarget.getAttribute("name");
  if (songName) {
    songName--;
  }
  audioElement.src = `songs/${songName}.mp3`;
  // masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
