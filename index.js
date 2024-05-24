//Part1:Refactoring
let str =
	"ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let arr = str.split("\n");
arr.forEach((el) => console.log(el));

//Part 2: Expanding Functionality

let colLength = arr[0].length;

let nested = [];
for (let i = 0; i < arr.length; i++) {
	nested.push(arr[i].split(","));
}
console.log(nested);

//Part 3: Transforming Data
create an array;
iterate nested, create an obj,
iterate each inner, create key-value pair with each el of inner
push the arr to array

let result = [];
let heads = [...nested[0]].map((el) => el.toLowerCase());

for (let i = 1; i < nested.length; i++) {
	let obj = {};
	let row = nested[i];
	for (let j = 0; j < row.length; j++) {
		obj[heads[j]] = row[j];
	}
	result.push(obj);
}
console.log(result);

//Part 4: Sorting and Manipulating Data
result.pop();
result.splice(1, 0, {
	id: "48",
	name: "Barry",
	occupation: "Runner",
	age: "25",
});
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(result);

let averageAge =
	result.reduce((prev, current) => prev + Number(current.age), 0) /
	result.length;
console.log(averageAge);
