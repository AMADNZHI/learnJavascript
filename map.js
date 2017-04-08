var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcLength(arr) {
    var arrayCopy = arr.slice();
    var arrayLength = [];
    for (var i = 0; i < arrayCopy.length; i++) { 
      arrayLength.push(arrayCopy[i].length);    
    }
    return arrayLength;
};

function mapFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    console.log(func(arr));
  }
  else {
    console.log('Не подходящий тип аргументов');
  }
}

mapFunc(methods, funcLength);