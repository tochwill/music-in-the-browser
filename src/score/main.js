import { notes } from './notes';
import { repeatPhrase, combinePhrases } from './utils';

const { A1, C2, F1, F2, F3, Ab1, D2, Db2, Db3, D3, A2, C3, E3, C4, B3, A3, A4, Ab3, Ab4, E4 } = notes;

const hatPattern = [[
    { tick: 1 }, { tick: 2 }, { tick: 3 },
    { tick: 5 }, { tick: 6 }, { tick: 7 },
    { tick: 9 }, { tick: 10 }, { tick: 11 },
    { tick: 13 }, { tick: 14 }, { tick: 15 }
]];
const hat = repeatPhrase(hatPattern, 32);

const bassPattern = [
    [{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }],
    [{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }],
    [{ tick: 0, pitch: A1 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }],
    [{ tick: 0, pitch: C2 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }],
    [{ tick: 0, pitch: F1 }, { tick: 4, pitch: F1 }, { tick: 8, pitch: F1 }, { tick: 12, pitch: F1 }],
    [{ tick: 0, pitch: F2 }, { tick: 4, pitch: Ab1 }, { tick: 8, pitch: Ab1 }, { tick: 12, pitch: Ab1 }],
    [{ tick: 0, pitch: D2 }, { tick: 4, pitch: D2 }, { tick: 8, pitch: D2 }, { tick: 12, pitch: D2 }],
    [{ tick: 0, pitch: Db2 }, { tick: 4, pitch: Db2 }, { tick: 8, pitch: Db2 }, { tick: 12, pitch: Db2 }]
];
const bass = repeatPhrase(bassPattern, 4);

const leadPattern = [
    [{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }],
    [{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }],
    [{ tick: 0, pitch: C4 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }],
    [{ tick: 0, pitch: B3 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }],
    [{ tick: 0, pitch: A3 }, { tick: 4, pitch: A3 }, { tick: 8, pitch: A3 }, { tick: 12, pitch: A3 }],
    [{ tick: 0, pitch: A4 }, { tick: 4, pitch: Ab4 }, { tick: 8, pitch: Ab4 }, { tick: 12, pitch: Ab4 }],
    [{ tick: 0, pitch: A4 }, { tick: 4, pitch: A4 }, { tick: 8, pitch: A4 }, { tick: 12, pitch: A4 }],
    [{ tick: 0, pitch: E4 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: E4 }]
];
const lead = repeatPhrase(leadPattern, 4);

const padPattern = [
    [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }],
    [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }],
    [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }],
    [{ tick: 0, pitch: C3 }, { tick: 0, pitch: E4 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }],
    [{ tick: 0, pitch: F3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: F3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: F3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: F3 }, { tick: 12, pitch: C3 }],
    [{ tick: 0, pitch: F3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: Ab3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: Ab3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: Ab3 }, { tick: 12, pitch: C3 }],
    [{ tick: 0, pitch: D3 }, { tick: 0, pitch: F3 }, { tick: 4, pitch: D3 }, { tick: 4, pitch: F3 }, { tick: 8, pitch: D3 }, { tick: 8, pitch: F3 }, { tick: 12, pitch: D3 }, { tick: 12, pitch: F3 }],
    [{ tick: 0, pitch: Db3 }, { tick: 0, pitch: E3 }, { tick: 4, pitch: Db3 }, { tick: 4, pitch: E3 }, { tick: 8, pitch: Db3 }, { tick: 8, pitch: E3 }, { tick: 12, pitch: Db3 }, { tick: 12, pitch: E3 }]
];
const pad = repeatPhrase(padPattern, 4)

const kickPattern = [[
    { tick: 0, pitch: A2 }, { tick: 8, pitch: A2 }
]];

const kickPattern2 = [[
    { tick: 0, pitch: A2 }, { tick: 4, pitch: A2 }, { tick: 8, pitch: A2 }, { tick: 12, pitch: A2 }
]];
const kick = combinePhrases(repeatPhrase(kickPattern, 16), repeatPhrase(kickPattern2, 16));

const snarePattern = [
    [{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }],
    [{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }],
    [{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }],
    [{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }, { tick: 15, pitch: A2 }]
];
const snare = repeatPhrase(snarePattern, 8);

const reverseNoisePattern = [
    [{ tick: 2 }, { tick: 10 }]
];
const reverseNoise = repeatPhrase(reverseNoisePattern, 32);

export const main = { hat, bass, lead, pad, kick, snare, reverseNoise };
