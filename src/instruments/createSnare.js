import createBuffer from './createBuffer';

export default function createSnare(audioContext) {
    const noiseGain = audioContext.createGain();
    noiseGain.connect(audioContext.destination);

    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 200;
    filter.connect(noiseGain);

    const oscGain = audioContext.createGain();
    oscGain.connect(audioContext.destination);

    return {
        play(time, pitch) {
            const noise = audioContext.createBufferSource();
            noise.buffer = createBuffer(audioContext);
            noise.connect(filter);

            const osc = audioContext.createOscillator();
            osc.type = 'triangle';
            osc.connect(oscGain);
     
            noiseGain.gain.setValueAtTime(0.2, time);
            noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.07);
            noise.start(time);

            osc.frequency.setValueAtTime(pitch, time);
            oscGain.gain.setValueAtTime(0.5, time);
            oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.07);
            osc.start(time);

            osc.stop(time + 0.1);
            noise.stop(time + 0.1);
        }
    }
}
