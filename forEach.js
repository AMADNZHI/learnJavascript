var methods = ['map', 'forEach', 'filter', 'reduce'];

function message(elem, i , array) {
    console.log('Это метод ' + elem);
}

function forEachFunc(arr, func) {
  
  if (Array.isArray(arr) && (typeof func === 'function')) {
    for (var i = 0; i < arr.length; i++) {
      func(arr[i], i , arr);
    }
  }
  else {
    console.log('Не подходящий тип аргументов');
  }
}

forEachFunc(methods, message);
methods.forEach(message);