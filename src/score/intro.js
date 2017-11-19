import { notes } from './notes';
import { repeatPhrase, restForBars } from './utils';

const { A1, C2, A2, C3, C4, B3, A3, E4 } = notes;

const hatPattern = [[
    { tick: 1 }, { tick: 2 }, { tick: 3 },
    { tick: 5 }, { tick: 6 }, { tick: 7 },
    { tick: 9 }, { tick: 10 }, { tick: 11 }, { tick: 12 },
    { tick: 13 }, { tick: 14 }, { tick: 15 }
]];
const hat = repeatPhrase(hatPattern, 8);

const bassPattern = [
    [{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }],
    [{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }],
    [{ tick: 0, pitch: A1 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }],
    [{ tick: 0, pitch: C2 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }]
];
const bass = repeatPhrase(bassPattern, 2);

const leadPattern = [
    [{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }],
    [{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }],
    [{ tick: 0, pitch: C4 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }],
    [{ tick: 0, pitch: B3 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }]
];
const lead = repeatPhrase(leadPattern, 2);

const padPattern = [
    [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }],
    [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }],
    [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }],
    [{ tick: 0, pitch: C3 }, { tick: 0, pitch: E4 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }]
];
const pad = repeatPhrase(padPattern, 2);

const kickPattern = [[
    { tick: 0, pitch: A2 }, { tick: 8, pitch: A2 }
]];
const kick = repeatPhrase(kickPattern, 8);

const snare = restForBars(8);
const reverseNoise = restForBars(8);

export const intro = { hat, bass, lead, pad, kick, snare, reverseNoise };
