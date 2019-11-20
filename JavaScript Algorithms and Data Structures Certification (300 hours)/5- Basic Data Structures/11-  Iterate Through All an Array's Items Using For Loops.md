## Solution


```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}
```