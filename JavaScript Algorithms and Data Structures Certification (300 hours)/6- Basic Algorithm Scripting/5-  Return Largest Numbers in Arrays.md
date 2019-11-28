## Solution


```js
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```