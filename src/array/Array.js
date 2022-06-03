import React from "react";

let personDetail = ["A", "B", "C"];
// let personDetail2 = ["A", "B", "C"];
let personDetail2 = ["C", "A", "E", "F", "Y"];

personDetail.push("Z");
console.log("newArray", personDetail); //add in array
const newPersonDetail = personDetail;
newPersonDetail.pop();
console.log("brandNewArray", newPersonDetail);
newPersonDetail.splice(1, 2, "X", "Y");
console.log("splice", newPersonDetail);
newPersonDetail.splice(2, 0, "E", "F");
console.log("new Splice", newPersonDetail);
newPersonDetail.splice(1, 3, "E", "F");
console.log("check Splice", newPersonDetail);
newPersonDetail.unshift("B", "C");
console.log("unshift", newPersonDetail);
newPersonDetail.shift();
console.log("shift", newPersonDetail);
// let lower = newPersonDetail.toLowerCase();
// console.log("Lower Case", lower);

//Array Destructuring(Es6 addition)
let greeting = ["good", "morning"];
let [g1, g2] = greeting;
console.log("Array destructuring", g1, g2);

//merge of two array......Here all values are repeat although both array are same. while in object keys and value
let mergedArray = [...personDetail, ...personDetail2];
console.log("mergedArray", mergedArray);

//some Method....it just check condotion pass or not and provide true or false based on that function.
let number = [1, 5, 10, 15, 20];

//forEach Loop
const forEachTest = number.forEach((index) => console.log("forEach", index));
console.log("forEachTest", forEachTest);

//while Loop, it will loop till the condition match
let i = 0;
let words = "";
while (i < 5) {
  words += "<br>the number is" + i;
  i++;
}
console.log("while", i);
console.log("whileResult", words);

//some method stops when it find element where condition is true.
const even = (element) => element % 2 === 0;

console.log("some Mehod", number.some(even));
console.log(
  "age some",
  number.some((x) => x > 18)
);

//for loop
let text = "";
for (let i = 0; i < number.length; i++) {
  text += "the no is " + i + <br></br>;
}
console.log("for", text);

//every Method.....it check every element of the array and than gives output on the based of funtion in the form of true and false
const adult = (element) => element > 18;
console.log("every", number.every(adult));

// reduce method worked on based of function and returns a single value. it start functioning with 1st element
const addition = number.reduce((a, b) => a + b);
console.log("reduce", addition);

const subtract = number.reduce((a, b) => a - b);
console.log("reduce", subtract);

const multiply = number.reduce((a, b) => a * b);
console.log("reduce", multiply);

//find any values that includes in array or not
const find = number.includes(10);
console.log("includes", find);

const check = newPersonDetail.includes("R");
console.log("check", check);

const found = number.find((element) => element > 10);
console.log("find", found);

let names = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Array = () => {
  return (
    <div className="Array">
      {/* map method */}
      <h1>Render Arrays in React</h1>
      {newPersonDetail.map((index) => {
        return <p>{index}</p>;
      })}
      {newPersonDetail.map((index) => (
        <p>{index}</p>
      ))}
      {/* for Each does not return anything, so is we try to return it, it gives "undefined" */}
      <div>
        {newPersonDetail.forEach((digit) => {
          return <p>{digit}</p>;
        })}
      </div>
      <div>
        {names
          .filter((name) => name.includes("s"))
          .map((filteredName) => (
            <li>{filteredName}</li>
          ))}
      </div>
    </div>
  );
};

export default Array;
