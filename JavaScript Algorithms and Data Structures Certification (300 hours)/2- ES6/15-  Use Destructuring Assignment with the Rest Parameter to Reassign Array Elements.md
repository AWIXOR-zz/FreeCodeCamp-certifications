## Solution

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [, , ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```