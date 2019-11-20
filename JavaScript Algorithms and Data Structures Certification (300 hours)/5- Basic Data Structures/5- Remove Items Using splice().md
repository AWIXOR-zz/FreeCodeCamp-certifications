## Solution


```js
function sumOfTen(arr) {
  arr.splice(2,2);
  return arr.reduce((a, b) => a + b);
}
```