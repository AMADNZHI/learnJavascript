var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcSum(previousValue, currentItem, index, arr) {
  return previousValue + currentItem;
};

function reduceFunc(arr, func, previousValue) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    if (previousValue === undefined) {
      previousValue = arr[0];
      var arrayCopy = arr.slice(1);
    }
    else {
      var arrayCopy = arr.slice();
    }
      
    for (var i = 0; i < arrayCopy.length; i++) { 
      previousValue = func(previousValue, arrayCopy[i], i , arrayCopy);
    }
    return previousValue;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(reduceFunc(methods, funcSum));
var newSum = methods.reduce(funcSum);
console.log(newSum);

