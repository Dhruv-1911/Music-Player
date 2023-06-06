//use audio constructre
const futuristic = new Audio("./sound/futuristic-beat-146661.mp3")
const leva_eternity = new Audio("./sound/leva-eternity-149473.mp3")
const lifelike = new Audio("./sound/lifelike-126735.mp3")
const smoke = new Audio("./sound/smoke-143172.mp3")
const unlock_me = new Audio("./sound/unlock-me-149058.mp3")

//select button
const nextButton = document.querySelector(".next");
const playPause = document.querySelector(".playPause");
const backButton = document.querySelector(".back");
const songName = document.querySelector(".song_name")
const playpauseIcon = document.querySelector("#playPause")

//songs aray object
const songs = [
    { ele: futuristic, SongName: "song 1" },
    { ele: leva_eternity, SongName: "song 2" },
    { ele: lifelike, SongName: "song 3" },
    { ele: smoke, SongName: "song 4" },
    { ele: unlock_me, SongName: "song 5" }
]

for (let song of songs) {
    song.ele.addEventListener("ended", () => {
        updatesong("next")
        playsong()
    })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].SongName

playPause.addEventListener("click", () => {
    playsong()
})

nextButton.addEventListener("click", () => {
    updatesong("next")
    playsong()
});

backButton.addEventListener("click", () => {
    updatesong("back")
    playsong()
});

//this function is use for update new song or got to prev song
function updatesong(action) {
    //this is for last/next song start with 0 means start with initial
    currentSong.pause();
    currentSong.currentTime = 0

    if (action === "next") {
        current++;
        if (current > songs.length - 1) current = 0
    }
    else if (action === "back") {
        current--;
        if (current < 0) current = songs.length - 1
    }
    //this is chnages every time we do next or prev song
    currentSong = songs[current].ele;
    songName.textContent = songs[current].SongName
}


/**
 * The function toggles between playing and pausing a song and updates the play/pause icon accordingly.
 */
function playsong() {
    if (currentSong.paused) {
        currentSong.play()
        playpauseIcon.className = "ph ph-pause"
    }
    else {
        currentSong.pause()
        playpauseIcon.className = "ph ph-play"
    }
}