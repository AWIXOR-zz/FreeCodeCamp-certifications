## Solution


```js
function copyMachine(arr,num){
	let newArr=[];
	while(num >=1){
	// change code below this line 
	newArr.push([...arr]);
	//change code above this line
	num--;
	}
	return newArr;
}
console.log(copyMachine([true, false, true], 2));
```