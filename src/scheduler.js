let schedulerId;

export default function createScheduler(audioContext, score, tempo, onComplete) {
    let nextBar = 0;
    let nextBarTime = audioContext.currentTime;
    
    const secondsPerBeat = 60 / tempo;
    const secondsPerBar = secondsPerBeat * 4;
    const secondsPerTick = secondsPerBeat / 4;
    
    const checkInterval = secondsPerTick * 1000;
    
    const { length } = score[0].pattern;

    function scheduler() {
        while (nextBarTime < audioContext.currentTime + secondsPerBeat) {
            if (nextBar < length) {
                scheduleBar(nextBarTime, score, nextBar, secondsPerTick);
            }
    
            if (nextBar === length) {
                cancelScheduler(score);
                onComplete();
            }
    
            nextBarTime += secondsPerBar;
            nextBar++;
        }
    }

    scheduleAutomation(score, nextBarTime, secondsPerBar, secondsPerTick);
    schedulerId = setInterval(scheduler, checkInterval);
}

function scheduleBar(time, score, nextBar, secondsPerTick) {
    score.forEach((track) => {
        track.pattern[nextBar].forEach(({ tick, pitch }) => {
            track.instrument.play(time + tick * secondsPerTick, pitch);
        });
    });
}

function scheduleAutomation(score, firstBarTime, secondsPerBar, secondsPerTick) {
    score.forEach((track) => {
        const { automation, instrument } = track;

        if (!automation) {
            return;
        }

        Object.keys(automation).forEach((parameter) => {
            const events = automation[parameter];

            events.forEach((event, index) => {
                const { bar, tick = 0, value, transition } = event;

                if (transition === 'ramp') {
                    instrument[parameter].exponentialRampToValueAtTime(value, firstBarTime + (secondsPerBar * bar + secondsPerTick * tick));
                } else {
                    instrument[parameter].setValueAtTime(value, firstBarTime + (secondsPerBar * bar + secondsPerTick * tick));
                }
            });
        });
    });
}

export function cancelScheduler(score) {
    clearInterval(schedulerId);
    schedulerId = null;
    score.forEach(({ instrument }) => {
        instrument.cancel && instrument.cancel();
    });
}
