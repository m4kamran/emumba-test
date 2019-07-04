function subArrays(arr, num) {
  arr = arr.sort(function(a, b) {
    return b - a;
  });
  var subArrayList = [];
  subArray(0, 0, []);
  return subArrayList || 'No Sub array found!';

  function subArray(start, total, l) {
    var result = [];
    for (var i = start; i < arr.length; i++) {
      var number = arr[i];
      if (total + number <= num) {
        subArray(i + 1, total, l.concat(result));
        total += number;
        result.push(number);
      }
    }
    if (total === num) subArrayList.push(l.concat(result));
  }
}

console.log(subArrays([4, 3, 2, 16, 7, 5], 9));
