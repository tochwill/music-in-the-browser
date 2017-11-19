import createScore from './score';
import createScheduler, { cancelScheduler } from './scheduler';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const score = createScore(audioContext);

let isPlaying = false;

const controls = document.querySelector('.play');
const container = document.querySelector('.container');

function togglePlayback() {
    isPlaying = !isPlaying;
    toggleControls(isPlaying);

    if (isPlaying) {
        createScheduler(audioContext, score, 120, onComplete);
    } else {
        cancelScheduler(score);
    }
}

function toggleControls(playing) {
    container.classList.toggle('playing');
    controls.textContent = playing ? 'Stop' : 'Play';
}

function onComplete() {
    isPlaying = false;
    toggleControls(false);
}

controls.addEventListener('click', togglePlayback);
