// 1/6 para avanzar 3 cuadros
// 2/6 para avanzar 1 cuadros
// 3/6 para avanzar 2 cuadros
const arrMoves = [1, 1, 2, 2, 2, 3];
class Run {
  constructor(timesrun) {
    this.timesrun = timesrun;
    this.maxTimes = timesrun.length;
    this.minTimes = 0;
  }
  running() {
    let times = Math.floor(
      Math.random() * (this.maxTimes - this.minTimes) + this.minTimes
    );
    return this.timesrun[times];
  }
}

let newCarrer = new Run(arrMoves);
console.log(newCarrer.running());

class Career {
  constructor(run, distance) {
    this.run = run;
    this.runners = [0, 0];
    this.runner1 = "Paola";
    this.runner2 = "Ximena";
    this.distance = distance;
  }
  doCareer() {
    let timesRunned = 0;
    do {
      this.runners[0] += this.run.running();
      this.runners[1] += this.run.running();
      timesRunned++;
    } while (timesRunned <= this.distance);
  }
  goal(runner1, runner2) {
    if (this.runners[0] === this.runners[1]) {
      console.log(`${runner1} y ${runner2} empataron`);
    } else if (this.runners[0] > this.runners[1]) {
      console.log(`${runner1} gano la carrera`);
    } else {
      console.log(`${runner2} gano la carrera`);
    }
  }
}
