// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  const quarter1 = 1;
  const quarter2 = 2;
  const quarter3 = 3;
  const quarter4 = 4;
  if (month == 1 || month == 2 || month == 3) {
    return quarter1;
  } if (month == 4 || month == 5 || month == 6) {
    return quarter2;
  } if (month == 7 || month == 8 || month == 9) {
    return quarter3;
  } if (month == 10 || month == 11 || month == 12) {
    return quarter4;
  }
};

// ля,я сейчас смотрю на то,как решали этот таск другие типы,и понимаю,что я долбень...
// тип через тот же switch это было бы намного быстрее + лучше код читался...
