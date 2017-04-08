var methods = ['map', 'forEach', 'filter', 'reduce'];

function message(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log('Это метод ' + arr[i]);
  }
}

function forEachFunc(arr, func) {
  
  if (Array.isArray(arr) && (typeof func === 'function')) {
    func(arr);
  }
  else {
    console.log('Не подходящий тип аргументов');
  }
}

forEachFunc(methods, message);