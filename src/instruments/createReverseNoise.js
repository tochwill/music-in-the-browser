import createBuffer from './createBuffer';

export default function createReverseNoise(audioContext) {
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 3000;
    filter.connect(audioContext.destination);

    let pan;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = -0.2;
        pan.connect(filter); 
    }

    const gain = audioContext.createGain();
    gain.gain.value = 0.001;
    gain.connect(pan || filter);

    return {
        play(time) {
            const noise = audioContext.createBufferSource();
            noise.buffer = createBuffer(audioContext);
            noise.connect(gain);

            gain.gain.setValueAtTime(0.001, time);
            gain.gain.exponentialRampToValueAtTime(0.08, time + 0.3);

            noise.start(time);
            noise.stop(time + 0.45);
        }
    }
}
