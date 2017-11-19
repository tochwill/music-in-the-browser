/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createBuffer;
function createBuffer(audioContext) {
    var bufferSize = audioContext.sampleRate / 4;
    var buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    var output = buffer.getChannelData(0);

    for (var i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }

    return buffer;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var notes = exports.notes = {
    C0: 16.351, Db0: 17.324, D0: 18.354, Eb0: 19.445, E0: 20.601, F0: 21.827, Gb0: 23.124, G0: 24.499, Ab0: 25.956, A0: 27.5, Bb0: 29.135, B0: 30.868,
    C1: 32.703, Db1: 34.648, D1: 36.708, Eb1: 38.891, E1: 41.203, F1: 43.654, Gb1: 46.249, G1: 48.999, Ab1: 51.913, A1: 55, Bb1: 58.27, B1: 61.735,
    C2: 65.406, Db2: 69.296, D2: 73.416, Eb2: 77.782, E2: 82.407, F2: 87.307, Gb2: 92.499, G2: 97.999, Ab2: 103.826, A2: 110, Bb2: 116.541, B2: 123.471,
    C3: 130.813, Db3: 138.591, D3: 146.832, Eb3: 155.563, E3: 164.814, F3: 174.614, Gb3: 184.997, G3: 195.998, Ab3: 207.652, A3: 220, Bb3: 233.082, B3: 246.942,
    C4: 261.626, Db4: 277.183, D4: 293.665, Eb4: 311.127, E4: 329.628, F4: 349.228, Gb4: 369.994, G4: 391.995, Ab4: 415.305, A4: 440, Bb4: 466.164, B4: 493.883,
    C5: 523.251, Db5: 554.365, D5: 587.33, Eb5: 622.254, E5: 659.255, F5: 698.456, Gb5: 739.989, G5: 783.991, Ab5: 830.609, A5: 880, Bb5: 932.328, B5: 987.767,
    C6: 1046.502, Db6: 1108.731, D6: 1174.659, Eb6: 1244.508, E6: 1318.51, F6: 1396.913, Gb6: 1479.978, G6: 1567.982, Ab6: 1661.219, A6: 1760, Bb6: 1864.655, B6: 1975.533,
    C7: 2093.005, Db7: 2217.461, D7: 2349.318, Eb7: 2489.016, E7: 2637.021, F7: 2793.826, Gb7: 2959.955, G7: 3135.964, Ab7: 3322.438, A7: 3520, Bb7: 3729.31, B7: 3951.066
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repeatPhrase = repeatPhrase;
exports.combinePhrases = combinePhrases;
exports.restForBars = restForBars;
function repeatPhrase(phrase, repeats) {
    return Array(repeats).fill(phrase).reduce(function (acc, arr) {
        return acc.concat(arr);
    }, []);
}

function combinePhrases() {
    for (var _len = arguments.length, phrases = Array(_len), _key = 0; _key < _len; _key++) {
        phrases[_key] = arguments[_key];
    }

    return phrases.reduce(function (acc, phrase) {
        return acc.concat(phrase);
    }, []);
}

function restForBars(numberOfBars) {
    return Array(numberOfBars).fill([]);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createScheduler;
exports.cancelScheduler = cancelScheduler;
var schedulerId = void 0;

function createScheduler(audioContext, score, tempo, onComplete) {
    var nextBar = 0;
    var nextBarTime = audioContext.currentTime;

    var secondsPerBeat = 60 / tempo;
    var secondsPerBar = secondsPerBeat * 4;
    var secondsPerTick = secondsPerBeat / 4;

    var scheduleAheadTime = secondsPerBeat; // rename these?
    var lookahead = secondsPerTick * 1000;

    var length = score[0].pattern.length;


    function scheduler() {
        while (nextBarTime < audioContext.currentTime + scheduleAheadTime) {
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
    schedulerId = setInterval(scheduler, lookahead);
}

function scheduleBar(time, score, nextBar, secondsPerTick) {
    score.forEach(function (track) {
        track.pattern[nextBar].forEach(function (_ref) {
            var tick = _ref.tick,
                pitch = _ref.pitch;

            track.instrument.play(time + tick * secondsPerTick, pitch);
        });
    });
}

function scheduleAutomation(score, firstBarTime, secondsPerBar, secondsPerTick) {
    score.forEach(function (track) {
        var automation = track.automation,
            instrument = track.instrument;


        if (!automation) {
            return;
        }

        Object.keys(automation).forEach(function (parameter) {
            var events = automation[parameter];

            events.forEach(function (event, index) {
                var bar = event.bar,
                    _event$tick = event.tick,
                    tick = _event$tick === undefined ? 0 : _event$tick,
                    value = event.value,
                    transition = event.transition;


                if (transition === 'ramp') {
                    instrument[parameter].exponentialRampToValueAtTime(value, firstBarTime + (secondsPerBar * bar + secondsPerTick * tick));
                } else {
                    instrument[parameter].setValueAtTime(value, firstBarTime + (secondsPerBar * bar + secondsPerTick * tick));
                }
            });
        });
    });
}

function cancelScheduler(score) {
    clearInterval(schedulerId);
    schedulerId = null;
    score.forEach(function (_ref2) {
        var instrument = _ref2.instrument;

        instrument.cancel && instrument.cancel();
    });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createScore;

var _instruments = __webpack_require__(13);

var _automation = __webpack_require__(14);

var _utils = __webpack_require__(2);

var _intro = __webpack_require__(15);

var _main = __webpack_require__(16);

var outro = _extends({}, _intro.intro, { snare: _main.main.snare.slice(0, 8), bass: (0, _utils.restForBars)(8) });

var sections = [_intro.intro, _main.main, outro];

var patterns = sections.reduce(function (acc, section) {
    Object.keys(section).forEach(function (track) {
        acc[track] = (0, _utils.combinePhrases)(acc[track] || [], section[track]);
    });
    return acc;
}, {});

var kick = patterns.kick,
    bass = patterns.bass,
    lead = patterns.lead,
    pad = patterns.pad,
    hat = patterns.hat,
    snare = patterns.snare,
    reverseNoise = patterns.reverseNoise;
function createScore(audioContext) {
    return [{ instrument: (0, _instruments.createKick)(audioContext), pattern: kick }, { instrument: (0, _instruments.createBass)(audioContext), pattern: bass }, { instrument: (0, _instruments.createLead)(audioContext), pattern: lead, automation: _automation.automation.lead }, { instrument: (0, _instruments.createPad)(audioContext), pattern: pad, automation: _automation.automation.pad }, { instrument: (0, _instruments.createHat)(audioContext), pattern: hat }, { instrument: (0, _instruments.createSnare)(audioContext), pattern: snare }, { instrument: (0, _instruments.createReverseNoise)(audioContext), pattern: reverseNoise }];
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _score = __webpack_require__(4);

var _score2 = _interopRequireDefault(_score);

var _scheduler = __webpack_require__(3);

var _scheduler2 = _interopRequireDefault(_scheduler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();

var score = (0, _score2.default)(audioContext);

var isPlaying = false;

var controls = document.querySelector('.play');
var container = document.querySelector('.container');

function togglePlayback() {
    isPlaying = !isPlaying;
    toggleControls(isPlaying);

    if (isPlaying) {
        (0, _scheduler2.default)(audioContext, score, 120, onComplete);
    } else {
        (0, _scheduler.cancelScheduler)(score);
    }
}

function toggleControls(playing) {
    container.classList.toggle('playing');
    controls.textContent = playing ? 'Stop' : 'Play';
}

function onComplete() {
    isPlaying = false;
    toggleControls(false);
}

controls.addEventListener('click', togglePlayback);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createBass;
function createBass(audioContext) {
    var highpassFilter = audioContext.createBiquadFilter();
    highpassFilter.type = 'highpass';
    highpassFilter.frequency.value = 30;
    highpassFilter.connect(audioContext.destination);

    var lowpassFilter = audioContext.createBiquadFilter();
    lowpassFilter.type = 'lowpass';
    lowpassFilter.frequency.value = 1000; // make this higher?
    lowpassFilter.connect(highpassFilter); // this needs to go through the other filter

    var gain = audioContext.createGain();
    gain.gain.value = 0.0001;
    gain.connect(lowpassFilter);

    return {
        play: function play(time, pitch) {
            var subOsc = audioContext.createOscillator();
            subOsc.connect(gain);
            subOsc.frequency.value = pitch;
            subOsc.type = 'sine';

            var triangleOsc = audioContext.createOscillator();
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
    };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createHat;

var _createBuffer = __webpack_require__(0);

var _createBuffer2 = _interopRequireDefault(_createBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createHat(audioContext) {
    var gain = audioContext.createGain();
    gain.gain.value = 0.02;
    gain.connect(audioContext.destination);

    var pan = void 0;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = 0.7;
        pan.connect(gain);
    }

    var filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 3000;
    filter.connect(pan || gain);

    return {
        play: function play(time) {
            var noise = audioContext.createBufferSource();
            noise.buffer = (0, _createBuffer2.default)(audioContext);
            noise.connect(filter);

            noise.start(time);
            noise.stop(time + 0.02);
        }
    };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createKick;

var _notes = __webpack_require__(1);

function createKick(audioContext) {
    var pitch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _notes.notes.A2;

    var gain = audioContext.createGain();
    gain.connect(audioContext.destination);

    return {
        play: function play(time) {
            var osc = audioContext.createOscillator();
            osc.connect(gain);

            osc.frequency.setValueAtTime(pitch, time);
            gain.gain.setValueAtTime(1, time);

            osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.45);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.45);

            osc.start(time);
            osc.stop(time + 0.45);
        }
    };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createLead;
function createLead(audioContext) {
    var filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;
    filter.connect(audioContext.destination);

    var pan = void 0;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = 0.4;
        pan.connect(filter);
    }

    var gain = audioContext.createGain();
    gain.value = 0.01;
    gain.connect(pan || filter);

    return {
        cutoff: filter.frequency,
        play: function play(time, pitch) {
            var sawOsc = audioContext.createOscillator();
            sawOsc.connect(gain);
            sawOsc.frequency.value = pitch;
            sawOsc.type = 'sawtooth';

            var triangleOsc = audioContext.createOscillator();
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
        cancel: function cancel() {
            filter.frequency.cancelScheduledValues(audioContext.currentTime);
        }
    };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createPad;
function createPad(audioContext) {
    var filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 3000;
    filter.connect(audioContext.destination);

    var pan = void 0;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = -0.2;
        pan.connect(filter);
    }

    var gain = audioContext.createGain();
    gain.value = 0.001;
    gain.connect(pan || filter);

    return {
        cutoff: filter.frequency,
        play: function play(time, pitch) {
            var sawOsc = audioContext.createOscillator();
            sawOsc.connect(gain);
            sawOsc.frequency.value = pitch;
            sawOsc.type = 'sawtooth';

            var squareOsc = audioContext.createOscillator();
            squareOsc.connect(gain);
            squareOsc.frequency.value = pitch;
            squareOsc.type = 'square';

            gain.gain.setValueAtTime(0.001, time);
            gain.gain.exponentialRampToValueAtTime(0.015, time + 0.3);

            sawOsc.start(time);
            sawOsc.stop(time + 0.5);
            squareOsc.start(time);
            squareOsc.stop(time + 0.5);
        },
        cancel: function cancel() {
            filter.frequency.cancelScheduledValues(audioContext.currentTime);
        }
    };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createReverseNoise;

var _createBuffer = __webpack_require__(0);

var _createBuffer2 = _interopRequireDefault(_createBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createReverseNoise(audioContext) {
    var filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 3000;
    filter.connect(audioContext.destination);

    var pan = void 0;
    if (audioContext.createStereoPanner) {
        pan = audioContext.createStereoPanner();
        pan.pan.value = -0.2;
        pan.connect(filter);
    }

    var gain = audioContext.createGain();
    gain.gain.value = 0.001;
    gain.connect(pan || filter);

    return {
        play: function play(time) {
            var noise = audioContext.createBufferSource();
            noise.buffer = (0, _createBuffer2.default)(audioContext);
            noise.connect(gain);

            gain.gain.setValueAtTime(0.001, time);
            gain.gain.exponentialRampToValueAtTime(0.08, time + 0.3);

            noise.start(time);
            noise.stop(time + 0.45);
        }
    };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createSnare;

var _createBuffer = __webpack_require__(0);

var _createBuffer2 = _interopRequireDefault(_createBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSnare(audioContext) {
    var noiseGain = audioContext.createGain();
    noiseGain.connect(audioContext.destination);

    var filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 200;
    filter.connect(noiseGain);

    var oscGain = audioContext.createGain();
    oscGain.connect(audioContext.destination);

    return {
        play: function play(time, pitch) {
            var noise = audioContext.createBufferSource();
            noise.buffer = (0, _createBuffer2.default)(audioContext);
            noise.connect(filter);

            var osc = audioContext.createOscillator();
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
    };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBass = __webpack_require__(6);

Object.defineProperty(exports, 'createBass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createBass).default;
  }
});

var _createLead = __webpack_require__(9);

Object.defineProperty(exports, 'createLead', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createLead).default;
  }
});

var _createPad = __webpack_require__(10);

Object.defineProperty(exports, 'createPad', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createPad).default;
  }
});

var _createHat = __webpack_require__(7);

Object.defineProperty(exports, 'createHat', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createHat).default;
  }
});

var _createReverseNoise = __webpack_require__(11);

Object.defineProperty(exports, 'createReverseNoise', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createReverseNoise).default;
  }
});

var _createKick = __webpack_require__(8);

Object.defineProperty(exports, 'createKick', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createKick).default;
  }
});

var _createSnare = __webpack_require__(12);

Object.defineProperty(exports, 'createSnare', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createSnare).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var lead = {
    cutoff: [{ bar: 0, value: 600, transition: 'immediate' }, { bar: 7, tick: 15, value: 20000, transition: 'ramp' }, { bar: 8, value: 600, transition: 'immediate' }, { bar: 15, tick: 15, value: 20000, transition: 'ramp' }, { bar: 16, value: 600, transition: 'immediate' }, { bar: 23, tick: 15, value: 20000, transition: 'ramp' }]
};

var pad = {
    cutoff: [{ bar: 0, value: 800, transition: 'immediate' }, { bar: 7, tick: 15, value: 13000, transition: 'ramp' }, { bar: 8, value: 1500, transition: 'immediate' }, { bar: 15, tick: 15, value: 8000, transition: 'ramp' }, { bar: 16, value: 2500, transition: 'immediate' }, { bar: 23, tick: 15, value: 4000, transition: 'ramp' }]
};

var automation = exports.automation = { lead: lead, pad: pad };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.intro = undefined;

var _notes = __webpack_require__(1);

var _utils = __webpack_require__(2);

var A1 = _notes.notes.A1,
    C2 = _notes.notes.C2,
    A2 = _notes.notes.A2,
    C3 = _notes.notes.C3,
    C4 = _notes.notes.C4,
    B3 = _notes.notes.B3,
    A3 = _notes.notes.A3,
    E4 = _notes.notes.E4;


var hatPattern = [[{ tick: 1 }, { tick: 2 }, { tick: 3 }, { tick: 5 }, { tick: 6 }, { tick: 7 }, { tick: 9 }, { tick: 10 }, { tick: 11 }, { tick: 12 }, { tick: 13 }, { tick: 14 }, { tick: 15 }]];
var hat = (0, _utils.repeatPhrase)(hatPattern, 8);

var bassPattern = [[{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }], [{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }], [{ tick: 0, pitch: A1 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }], [{ tick: 0, pitch: C2 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }]];
var bass = (0, _utils.repeatPhrase)(bassPattern, 2);

var leadPattern = [[{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }], [{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }], [{ tick: 0, pitch: C4 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }], [{ tick: 0, pitch: B3 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }]];
var lead = (0, _utils.repeatPhrase)(leadPattern, 2);

var padPattern = [[{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }], [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }], [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }], [{ tick: 0, pitch: C3 }, { tick: 0, pitch: E4 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }]];
var pad = (0, _utils.repeatPhrase)(padPattern, 2);

var kickPattern = [[{ tick: 0, pitch: A2 }, { tick: 8, pitch: A2 }]];
var kick = (0, _utils.repeatPhrase)(kickPattern, 8);

var snare = (0, _utils.restForBars)(8);
var reverseNoise = (0, _utils.restForBars)(8);

var intro = exports.intro = { hat: hat, bass: bass, lead: lead, pad: pad, kick: kick, snare: snare, reverseNoise: reverseNoise };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.main = undefined;

var _notes = __webpack_require__(1);

var _utils = __webpack_require__(2);

var A1 = _notes.notes.A1,
    C2 = _notes.notes.C2,
    F1 = _notes.notes.F1,
    F2 = _notes.notes.F2,
    F3 = _notes.notes.F3,
    Ab1 = _notes.notes.Ab1,
    D2 = _notes.notes.D2,
    Db2 = _notes.notes.Db2,
    Db3 = _notes.notes.Db3,
    D3 = _notes.notes.D3,
    A2 = _notes.notes.A2,
    C3 = _notes.notes.C3,
    E3 = _notes.notes.E3,
    C4 = _notes.notes.C4,
    B3 = _notes.notes.B3,
    A3 = _notes.notes.A3,
    A4 = _notes.notes.A4,
    Ab3 = _notes.notes.Ab3,
    Ab4 = _notes.notes.Ab4,
    E4 = _notes.notes.E4;


var hatPattern = [[{ tick: 1 }, { tick: 2 }, { tick: 3 }, { tick: 5 }, { tick: 6 }, { tick: 7 }, { tick: 9 }, { tick: 10 }, { tick: 11 }, { tick: 13 }, { tick: 14 }, { tick: 15 }]];
var hat = (0, _utils.repeatPhrase)(hatPattern, 32);

var bassPattern = [[{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }], [{ tick: 0, pitch: A1 }, { tick: 4, pitch: A1 }, { tick: 8, pitch: A1 }, { tick: 12, pitch: A1 }], [{ tick: 0, pitch: A1 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }], [{ tick: 0, pitch: C2 }, { tick: 4, pitch: C2 }, { tick: 8, pitch: C2 }, { tick: 12, pitch: C2 }], [{ tick: 0, pitch: F1 }, { tick: 4, pitch: F1 }, { tick: 8, pitch: F1 }, { tick: 12, pitch: F1 }], [{ tick: 0, pitch: F2 }, { tick: 4, pitch: Ab1 }, { tick: 8, pitch: Ab1 }, { tick: 12, pitch: Ab1 }], [{ tick: 0, pitch: D2 }, { tick: 4, pitch: D2 }, { tick: 8, pitch: D2 }, { tick: 12, pitch: D2 }], [{ tick: 0, pitch: Db2 }, { tick: 4, pitch: Db2 }, { tick: 8, pitch: Db2 }, { tick: 12, pitch: Db2 }]];
var bass = (0, _utils.repeatPhrase)(bassPattern, 4);

var leadPattern = [[{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }], [{ tick: 0, pitch: C4 }, { tick: 4, pitch: C4 }, { tick: 8, pitch: C4 }, { tick: 12, pitch: C4 }], [{ tick: 0, pitch: C4 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }], [{ tick: 0, pitch: B3 }, { tick: 4, pitch: B3 }, { tick: 8, pitch: B3 }, { tick: 12, pitch: B3 }], [{ tick: 0, pitch: A3 }, { tick: 4, pitch: A3 }, { tick: 8, pitch: A3 }, { tick: 12, pitch: A3 }], [{ tick: 0, pitch: A4 }, { tick: 4, pitch: Ab4 }, { tick: 8, pitch: Ab4 }, { tick: 12, pitch: Ab4 }], [{ tick: 0, pitch: A4 }, { tick: 4, pitch: A4 }, { tick: 8, pitch: A4 }, { tick: 12, pitch: A4 }], [{ tick: 0, pitch: E4 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: E4 }]];
var lead = (0, _utils.repeatPhrase)(leadPattern, 4);

var padPattern = [[{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }], [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: A3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: A3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: A3 }, { tick: 12, pitch: C3 }], [{ tick: 0, pitch: A3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }], [{ tick: 0, pitch: C3 }, { tick: 0, pitch: E4 }, { tick: 4, pitch: C3 }, { tick: 4, pitch: E4 }, { tick: 8, pitch: C3 }, { tick: 8, pitch: E4 }, { tick: 12, pitch: C3 }, { tick: 12, pitch: E4 }], [{ tick: 0, pitch: F3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: F3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: F3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: F3 }, { tick: 12, pitch: C3 }], [{ tick: 0, pitch: F3 }, { tick: 0, pitch: C3 }, { tick: 4, pitch: Ab3 }, { tick: 4, pitch: C3 }, { tick: 8, pitch: Ab3 }, { tick: 8, pitch: C3 }, { tick: 12, pitch: Ab3 }, { tick: 12, pitch: C3 }], [{ tick: 0, pitch: D3 }, { tick: 0, pitch: F3 }, { tick: 4, pitch: D3 }, { tick: 4, pitch: F3 }, { tick: 8, pitch: D3 }, { tick: 8, pitch: F3 }, { tick: 12, pitch: D3 }, { tick: 12, pitch: F3 }], [{ tick: 0, pitch: Db3 }, { tick: 0, pitch: E3 }, { tick: 4, pitch: Db3 }, { tick: 4, pitch: E3 }, { tick: 8, pitch: Db3 }, { tick: 8, pitch: E3 }, { tick: 12, pitch: Db3 }, { tick: 12, pitch: E3 }]];
var pad = (0, _utils.repeatPhrase)(padPattern, 4);

var kickPattern = [[{ tick: 0, pitch: A2 }, { tick: 8, pitch: A2 }]];

var kickPattern2 = [[{ tick: 0, pitch: A2 }, { tick: 4, pitch: A2 }, { tick: 8, pitch: A2 }, { tick: 12, pitch: A2 }]];
var kick = (0, _utils.combinePhrases)((0, _utils.repeatPhrase)(kickPattern, 16), (0, _utils.repeatPhrase)(kickPattern2, 16));

var snarePattern = [[{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }], [{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }], [{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }], [{ tick: 4, pitch: A2 }, { tick: 12, pitch: A2 }, { tick: 15, pitch: A2 }]];
var snare = (0, _utils.repeatPhrase)(snarePattern, 8);

var reverseNoisePattern = [[{ tick: 2 }, { tick: 10 }]];
var reverseNoise = (0, _utils.repeatPhrase)(reverseNoisePattern, 32);

var main = exports.main = { hat: hat, bass: bass, lead: lead, pad: pad, kick: kick, snare: snare, reverseNoise: reverseNoise };

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map