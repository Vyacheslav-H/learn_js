class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    
    setDays(days) {
      this._days = days;
    }

    setRate(rate) {
      this._rate = rate;
    }

    getName() {
      return this._name;
    }

    getSurname() {
      return this._surname;
    }

    getRate() {
      return this._rate;
    }

    getDays() {
      return this._days;
    }

    getSalary() {
      return this._days * this._rate;
    }

}



var worker = new Worker('Иван', 'Иванов', 10, 31);


console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary());