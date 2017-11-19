export default function createLead(audioContext) {
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;
    filter.connect(audioContext.destination);

    let pan;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = 0.4;
        pan.connect(filter);
    }

    const gain = audioContext.createGain();
    gain.value = 0.01;
    gain.connect(pan || filter);

    return {
        cutoff: filter.frequency,
        play(time, pitch) {
            const sawOsc = audioContext.createOscillator();
            sawOsc.connect(gain);
            sawOsc.frequency.value = pitch;
            sawOsc.type = 'sawtooth';
            
            const triangleOsc = audioContext.createOscillator();
            triangleOsc.connect(gain);
            triangleOsc.frequency.value = pitch;
            triangleOsc.type = 'triangle';
            
            gain.gain.setValueAtTime(0.005, time);
            gain.gain.exponentialRampToValueAtTime(0.06, time + 0.3);
            
            sawOsc.start(time);
            sawOsc.stop(time + 0.5);
            triangleOsc.start(time);
            triangleOsc.stop(time + 0.5);
        },
        cancel() {
            filter.frequency.cancelScheduledValues(audioContext.currentTime);
        }
    }
}
