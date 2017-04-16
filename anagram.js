var arr = ['торс', 'ропот', 'рост', 'опт', 'пот', 'сорт', 'топор', 'стол', 'стул', 'сон', 'нос'];
var dict = {};
var result = [];

function sortFunc (elem) {
   var sorted;
   return sorted = elem.split('').sort().join(''); 
}

function createObjValue (array, obj){
   for (var i = 0; i < array.length; i++) {
      obj[sortFunc(array[i])] = [];
   }
   for (var i = 0; i < array.length; i++) {
      obj[sortFunc(array[i])].push(array[i]);
  }
}

function pushValueArray (obj) {
  for (var key in dict) result.push(obj[key]);
}

createObjValue(arr, dict);
pushValueArray(dict);

console.log(result);