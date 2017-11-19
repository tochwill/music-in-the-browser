const lead = {
    cutoff: [
        { bar: 0, value: 600, transition: 'immediate' }, { bar: 7, tick: 15, value: 20000, transition: 'ramp' },
        { bar: 8, value: 600, transition: 'immediate' }, { bar: 15, tick: 15, value: 20000, transition: 'ramp' },
        { bar: 16, value: 600, transition: 'immediate' }, { bar: 23, tick: 15, value: 20000, transition: 'ramp' }
    ]
}

const pad = {
    cutoff: [
        { bar: 0, value: 800, transition: 'immediate' }, { bar: 7, tick: 15, value: 13000, transition: 'ramp' },
        { bar: 8, value: 1500, transition: 'immediate' }, { bar: 15, tick: 15, value: 8000, transition: 'ramp' },
        { bar: 16, value: 2500, transition: 'immediate' }, { bar: 23, tick: 15, value: 4000, transition: 'ramp' }
    ]
}

export const automation = { lead, pad };
