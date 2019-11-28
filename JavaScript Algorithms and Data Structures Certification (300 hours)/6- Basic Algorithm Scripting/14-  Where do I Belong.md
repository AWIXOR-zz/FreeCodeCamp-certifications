## Solution


```js
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
```