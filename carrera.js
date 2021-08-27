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

let forRun = new Run(arrMoves);

class Career {
  constructor(run, distance) {
    this.run = run;
    this.runners = [0, 0];
    this.runnerRuned1 = []
    this.runnerRuned2 = [];
    this.runner1 = "Paola";
    this.runner2 = "Ximena";
    this.distance = distance;
  }
  doCareer() {
    let timesRunned = false;
    while (timesRunned === false) {
      // conteo de avance del corredor
      this.runners[0] += this.run.running();
      this.runners[1] += this.run.running();
      // conteo de las veces que a corrido
      this.runnerRuned1.push(this.runners[0]);
      timesRunned = this.checkRunnedTimes();
      this.runnerRuned2.push(this.runners[1]);
      timesRunned = this.checkRunnedTimes();
    };
    this.goal()
  }
  checkRunnedTimes(){
    if (this.distance < this.runners[0] || this.distance < this.runners[1]) {
      if (this.runnerRuned1.length === this.runnerRuned2.length) {
        return true;
      } else if (this.runnerRuned1.length > this.runnerRuned2.length) {
        return false;
      } else if(this.runnerRuned1.length < this.runnerRuned2.length){
        // Un chance mas de correr a corredor1
        this.runners[0] += this.run.running();
        return true;
      }
    }
    
  }
  goal() {
    if (this.runners[0] === this.runners[1]) {
      console.log(`${this.runner1} y ${this.runner2} empataron`);
    } else if (this.runners[0] > this.runners[1]) {
      console.log(`${this.runner1} gano la carrera`);
    } else {
      console.log(`${this.runner2} gano la carrera`);
    }
  }
}

let newCareer = new Career(forRun, 100);
newCareer.doCareer();