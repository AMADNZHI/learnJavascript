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
      throw new Error("Некорректный тип аргументов");
    }
}

try {
    forEachFunc(methods, message);
} catch(error) {
    console.log(error.name + ': ' + error.message);
}

methods.forEach(message);