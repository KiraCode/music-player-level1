const songs = [
  {
    title: "Drive breakbeat",
    duration: "1:49",
    thumbnail: "./assets/icons/music-icon.svg",
    src: "./data/track1.mp3",
    artist: "Rockot",
    year: 2023,
  },
  {
    title: "Titanium",
    duration: "1:46",
    thumbnail: "./assets/icons/music-icon.svg",
    src: "./data/track2.mp3",
    artist: "AlisiaBeats",
    year: 2023,
  },
  {
    title: "Science Documentory",
    duration: "2:07",
    thumbnail: "./assets/icons/music-icon.svg",
    src: "./data/track3.mp3",
    artist: "Lexin_Music",
    year: 2023,
  },
  {
    title: "Once In Paris",
    duration: "2:12",
    thumbnail: "./assets/icons/music-icon.svg",
    src: "./data/track4.mp3",
    artist: "Pumpupthemind",
    year: 2023,
  },
];

// get all the access to the elements
const songlist = document.getElementById("song-list");
const thumbnail = document.getElementById("thumbnail");
const playpauseBtn = document.getElementById("play-pause");
const restartBtn = document.getElementById("restart");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const currTime = document.getElementById("current-time");
const leftTime = document.getElementById("time-left");
const volumeControl = document.getElementById("volume");
const trackTitle = document.getElementById("player-title");
const trackDescription = document.getElementById("player-description");

// to store index of track being played
let currentSongIndex = 0;

// constructor
let audio = new Audio();
console.log(audio);

function renderSongList() {
  // clear our exisiting list
  songlist.innerHTML = " ";

  // render songs dynamically
  songs.forEach((song, index) => {
    console.log(song);

    // create elements for each song
    const itemContainer = document.createElement("div");
    const itemImg = document.createElement("div");
    const imgElement = document.createElement("img");
    const trackDataContainer = document.createElement("div");
    const trackTitle = document.createElement("p");
    const trackArtist = document.createElement("p");
    const trackDurationContainer = document.createElement("div");
    const trackDuration = document.createElement("p");
    const trackYear = document.createElement("p");

    // add classes

    itemContainer.classList.add("item-container");
    itemContainer.setAttribute("data-index", index);
    itemImg.classList.add("item-img");
    trackDataContainer.classList.add("track-data-container");
    trackTitle.classList.add("track-title");
    trackArtist.classList.add("track-artist");
    trackDurationContainer.classList.add("track-duration-container");
    trackDuration.classList.add("track-duration");
    trackYear.classList.add("track-year");

    // add content and structure the list

    imgElement.src = "./assets/icons/outline.svg";
    trackTitle.textContent = song.title;
    trackArtist.textContent = song.artist;
    trackDuration.textContent = song.duration;
    trackYear.textContent = song.year;

    // append elements to the container
    itemImg.appendChild(imgElement);
    trackDataContainer.appendChild(trackTitle);
    trackDataContainer.appendChild(trackArtist);
    trackDurationContainer.appendChild(trackDuration);
    trackDurationContainer.appendChild(trackYear);

    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(trackDataContainer);
    itemContainer.appendChild(trackDurationContainer);

    songlist.appendChild(itemContainer);
  });
}

renderSongList();
