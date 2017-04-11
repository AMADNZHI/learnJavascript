var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcSum(previousValue, currentItem, index, arr) {
    return previousValue + currentItem;
};

function reduceFunc(arr, func, previousValue) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var sum;
    for (var i = 0; i < arrayCopy.length; i++) { 
      var previousValue = func(previousValue, arrayCopy[i], i , arrayCopy);
      sum = previousValue;
    }
    return sum;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(reduceFunc(methods, funcSum, ''));
var newSum = methods.reduce(funcSum);
console.log(newSum);