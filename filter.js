var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcLength(elem, i , array) {
    return elem.length > 3;
};

function filterFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var arrayLength = [];
    for (var i = 0; i < arrayCopy.length; i++) { 
      if (func(arrayCopy[i], i , arrayCopy)) {
        arrayLength.push(arrayCopy[i]);  
      }
    }
    return arrayLength;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(mapFilter(methods, funcLength));
var newArrayLength = methods.filter(funcLength);
console.log(newArrayLength);