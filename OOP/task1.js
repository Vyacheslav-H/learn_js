class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    
    get getSalary() {
      return this.calcSalary();
    }

    calcSalary() {
      return this.days * this.rate;
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);
var worker2 = new Worker('Алексей','Алексеев', 20, 62);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary);

console.log(worker2.name); //выведет 'Алексей'
console.log(worker2.surname); //выведет 'Алексеев'
console.log(worker2.rate); //выведет 20
console.log(worker2.days); //выведет 62
console.log(worker2.getSalary);