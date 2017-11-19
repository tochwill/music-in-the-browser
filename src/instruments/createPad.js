export default function createPad(audioContext) {
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 3000;
    filter.connect(audioContext.destination);

    let pan;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = -0.2;
        pan.connect(filter);
    }

    const gain = audioContext.createGain();
    gain.value = 0.001;
    gain.connect(pan || filter);

    return {
        cutoff: filter.frequency,
        play(time, pitch) {
            const sawOsc = audioContext.createOscillator();
            sawOsc.connect(gain);
            sawOsc.frequency.value = pitch;
            sawOsc.type = 'sawtooth';

            const squareOsc = audioContext.createOscillator();
            squareOsc.connect(gain);
            squareOsc.frequency.value = pitch;
            squareOsc.type = 'square';

            gain.gain.setValueAtTime(0.001, time);
            gain.gain.exponentialRampToValueAtTime(0.015, time + 0.3);

            sawOsc.start(time);
            sawOsc.stop(time + 0.5);
            squareOsc.start(time);
            squareOsc.stop(time + 0.5);
        },
        cancel() {
            filter.frequency.cancelScheduledValues(audioContext.currentTime);
        }
    }
}
