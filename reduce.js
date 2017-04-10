var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcSum(previousValue, currentItem, index, arr) {
    return previousValue + currentItem;
};

function reduceFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var arraySum = [];
    var previousValue = '';
    for (var i = 0; i < arrayCopy.length; i++) { 
      var previousValue = func(previousValue, arrayCopy[i], i , arrayCopy);
      arraySum = previousValue;
    }
    return arrayLength;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(mapFunc(methods, funcSum));
var newArraySum = methods.reduce(funcSum, '');
console.log(newArraySum);