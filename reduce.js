var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcLength(previousValue, currentItem, index, arr) {
    return previousValue + currentItem;
};

function mapFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var arrayLength = [];
    var previousValue = '';
    for (var i = 0; i < arrayCopy.length; i++) { 
      var previousValue = func(previousValue, arrayCopy[i], i , arrayCopy);
      arrayLength = previousValue;
    }
    return arrayLength;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(mapFunc(methods, funcLength));
var newArrayLength = methods.reduce(funcLength, '');
console.log(newArrayLength);