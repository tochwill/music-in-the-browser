import { createKick, createBass, createLead, createPad, createHat, createSnare, createReverseNoise } from '../instruments';
import { automation } from './automation';
import { combinePhrases, restForBars } from './utils';
import { intro } from './intro';
import { main } from './main';

const outro = { ...intro, snare: main.snare.slice(0, 8), bass: restForBars(8) };

const sections = [ intro, main, outro ];

const patterns = sections.reduce((acc, section) => {
    Object.keys(section).forEach((track) => {
        acc[track] = combinePhrases(acc[track] || [], section[track]);
    });
    return acc;
}, {});

const { kick, bass, lead, pad, hat, snare, reverseNoise } = patterns;

export default function createScore(audioContext) {
    return [
        { instrument: createKick(audioContext), pattern: kick },
        { instrument: createBass(audioContext), pattern: bass },
        { instrument: createLead(audioContext), pattern: lead, automation: automation.lead },
        { instrument: createPad(audioContext), pattern: pad, automation: automation.pad },
        { instrument: createHat(audioContext), pattern: hat },
        { instrument: createSnare(audioContext), pattern: snare },
        { instrument: createReverseNoise(audioContext), pattern: reverseNoise }
    ];
}
