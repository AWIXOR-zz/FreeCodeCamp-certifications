## Solution


```js
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);
```