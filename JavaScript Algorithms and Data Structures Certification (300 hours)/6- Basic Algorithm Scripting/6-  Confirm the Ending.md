## Solution


```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
```