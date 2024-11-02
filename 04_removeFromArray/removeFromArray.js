const removeFromArray = function(myArray, ...num) {
  return myArray.filter(item => !num.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
