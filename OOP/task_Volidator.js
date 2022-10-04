let re = /\S+@\S+\.\S+/;

class Validator {
  constructor(email, domain, date, phone) {
    this.email = email;
    this.domain = domain;
    this.date = date;
    this.phone = phone;
  }
    isEmail(mail) {
        return re.test(mail);
    }

    isDomain() {
        return document.domain;
    }

    isDate() {
      if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return true;
      } else {
        return false;
      }
    }
}


var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны