/* eslint-disable class-methods-use-this */
const re = /\S+@\S+\.\S+/;

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

  isDomain(str) {
    return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1));
  }

  isDate(str) {
    const date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
    return date !== null;
  }

  isPhone(str) {
    // eslint-disable-next-line no-useless-escape
    const phone = str.match(/\+375\ \([0-9]{2}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
    return phone !== null;
  }
}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // тут можете формат своей страны
