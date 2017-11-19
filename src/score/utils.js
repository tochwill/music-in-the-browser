export function repeatPhrase(phrase, repeats) {
    return Array(repeats).fill(phrase).reduce((acc, arr) => acc.concat(arr), []);
}

export function combinePhrases(...phrases) {
    return phrases.reduce((acc, phrase) => acc.concat(phrase), []);
}

export function restForBars(numberOfBars) {
    return Array(numberOfBars).fill([]);
}
