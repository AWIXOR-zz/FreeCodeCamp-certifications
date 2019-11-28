## Solution


```js
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
```