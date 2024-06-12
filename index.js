const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackTitle = document.getElementById('track-title');

const tracks = [
    { title: "John Denver - Annie's Song", src: "John Denver - Annie's Song (Official Audio).mp3" },
    { title: "Selena Gomez - Single Soon", src: "Selena Gomez - Single Soon (Official Music Video).mp3" },
    { title: "Dua Lipa - Houdini ", src:  "Dua Lipa - Houdini (Official Music Video).mp3" }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audioPlayer.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
}

function playTrack() {
    audioPlayer.play();
    playButton.textContent = "Pause";
}

function pauseTrack() {
    audioPlayer.pause();
    playButton.textContent = "Play";
}

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

audioPlayer.addEventListener('ended', () => {
    nextButton.click();
});

// Load the initial track
loadTrack(currentTrackIndex);
