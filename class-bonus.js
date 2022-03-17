'use stict';

class Counter{
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
      //callback이 있다면 실행 없을땐 그대로
    }
  }
}

function alertNum(num) {
  alert(`alert! ${num}`);
}

function printSomething (num) {
  console.log(`wow! ${num}`);
}

const coolCounter = new Counter(printSomething);


coolCounter.increase(); 
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();