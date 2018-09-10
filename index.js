const { Synth, Loop } = require("tone");

require('tone').Transport.start(0)

const synth = new Synth().toMaster();

class Agent {
  constructor(options) {
    this.instrument = synth;
    this.loops = [];
  }

  addLoop(note, length, triggerFreq) {
    this.loops.push(
      new Loop(function(time) {
        synth.triggerAttackRelease(note, length, time);
      }, triggerFreq)
    );
  }

  playLoop(loopIndex, start, end) {
    this.loops[0].start(start).stop(end);
  }

  cleanup() {
    console.log("ive removed stuff");
  }
}

module.exports = Agent;
