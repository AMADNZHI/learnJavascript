var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcLength(elem, i , array) {
    return elem.length;
};

function mapFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var output = [];
    for (var i = 0; i < arrayCopy.length; i++) { 
      output.push(func(arrayCopy[i], i , arrayCopy));  
    }
    return output;
  }
    throw new Error("Некорректный тип аргументов");
}

try {
    console.log(mapFunc(methods, funcLength));
} catch(error) {
    console.log(error.name + ': ' + error.message);
}

var newArrayLengths = methods.map(funcLength);
console.log(newArrayLengths);