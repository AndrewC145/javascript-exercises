const sumAll = function(num1, num2) {
  let result = 0;

  if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number' || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  }

  if (num1 > num2) {
    for (let j = 0; j < num1; j++) {
      result += num2 + j;
    }
  } else {
    for (let i = 0; i < num2; i++) {
      result += num1 + i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
