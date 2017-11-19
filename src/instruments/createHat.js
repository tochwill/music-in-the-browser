import createBuffer from './createBuffer';

export default function createHat(audioContext) {
    const gain = audioContext.createGain();
    gain.gain.value = 0.02;
    gain.connect(audioContext.destination);

    let pan;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = 0.7;
        pan.connect(gain);
    }

    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 3000;
    filter.connect(pan || gain);

    return {
        play(time) {
            const noise = audioContext.createBufferSource();
            noise.buffer = createBuffer(audioContext);
            noise.connect(filter);

            noise.start(time);
            noise.stop(time + 0.02);
        }
    }
}
