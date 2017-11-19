import { notes } from '../score/notes';

export default function createKick(audioContext, pitch = notes.A2) {
    const gain = audioContext.createGain();
    gain.connect(audioContext.destination);

    return {
        play(time) {
            const osc = audioContext.createOscillator();
            osc.connect(gain);

            osc.frequency.setValueAtTime(pitch, time);
            gain.gain.setValueAtTime(0.8, time);

            osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.45);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.45);

            osc.start(time);
            osc.stop(time + 0.45);
        }
    };
}
