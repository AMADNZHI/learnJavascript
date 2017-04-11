var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcLength(elem, i , array) {
    return elem.length > 3;
};

function filterFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var output = [];
    for (var i = 0; i < arrayCopy.length; i++) { 
      if (func(arrayCopy[i], i , arrayCopy)) {
        output.push(arrayCopy[i]);  
      }
    }
    return output;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(filterFunc(methods, funcLength));
var newArrayLengths = methods.filter(funcLength);
console.log(newArrayLengths);