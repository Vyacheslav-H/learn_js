class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getFullName() {
    return super.getFullName();
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const student = new Student('Иван', 'Иванов', 2019);

console.log(student.name); // выведет 'Иван'
console.log(student.surname); // выведет 'Иванов'
console.log(student.getFullName()); // выведет 'Иван Иванов'
console.log(student.year); // выведет 2019
console.log(student.getCourse()); // выведет 3 - третий курс, так как текущий год 2022
