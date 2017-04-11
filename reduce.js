var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcSum(previousValue, currentItem, index, arr) {
    return previousValue + currentItem;
};

function reduceFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var previousValue = arrayCopy[0];
    for (var i = 1; i < arrayCopy.length; i++) { 
      previousValue = func(previousValue, arrayCopy[i], i , arrayCopy);
    }
    return previousValue;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(reduceFunc(methods, funcSum));
var newSum = methods.reduce(funcSum);
console.log(newSum);