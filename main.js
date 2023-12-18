const arr1 = [1, 3, 4, 2, 7, 9, 10, 6, 8];
const arr2 = [1, 3, 9, 11, 5, 7, 13];
function findNumber(arr1, arr2) {
  var result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      result.push(arr1[i]);
    }
  }
  return result;
}

var resultSearch = findNumber(arr1, arr2);
console.log(resultSearch); //[1, 3, 7, 9]
