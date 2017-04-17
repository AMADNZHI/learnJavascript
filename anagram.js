var arr = ['торс', 'ропот', 'рост', 'опт', 'пот', 'сорт', 'топор', 'стол', 'стул', 'сон', 'нос'];
var dict = {};
var result = [];

function sortFunc (elem) {
   return elem.split('').sort().join(''); 
}

function createObjValue (array, obj){
   for (var i = 0; i < array.length; i++) {
     if (sortFunc(array[i]) in obj) {
         obj[sortFunc(array[i])].push(array[i]);
     }
     else {
       obj[sortFunc(array[i])] = [];
       obj[sortFunc(array[i])].push(array[i]);
     } 
   }
}

function pushValueArray (obj) {
  for (var key in dict) result.push(obj[key]);
}

createObjValue(arr, dict);
pushValueArray(dict);

console.log(result);


