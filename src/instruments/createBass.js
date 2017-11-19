export default function createBass(audioContext) {
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;
    filter.connect(audioContext.destination);

    const gain = audioContext.createGain();
    gain.connect(filter);

    return {
        play(time, pitch) {
            const subOsc = audioContext.createOscillator();
            subOsc.connect(gain);
            subOsc.frequency.value = pitch;
            subOsc.type = 'sine';

            const triangleOsc = audioContext.createOscillator();
            triangleOsc.connect(gain);
            triangleOsc.frequency.value = pitch;
            triangleOsc.type = 'triangle';

            gain.gain.setValueAtTime(0.0001, time);
            gain.gain.exponentialRampToValueAtTime(0.3, time + 0.3);

            subOsc.start(time);
            subOsc.stop(time + 0.5);
            triangleOsc.start(time);
            triangleOsc.stop(time + 0.5);
        }
    }
}
