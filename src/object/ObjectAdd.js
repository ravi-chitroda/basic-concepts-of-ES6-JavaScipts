import React from "react";
import { Link, useNavigate } from "react-router-dom";

let personDetail = { name: "Ravi", age: 31, sex: "male" };
let personDetail2 = { name: "Ravi", age: 31, sex: "male" };

personDetail.city = "Vadodara";
console.log("detail", personDetail);
const person = personDetail;
// personDetail.age += 5;   //this works

// const newNumber = (personDetail.age += 5);
personDetail = {
  ...personDetail,
  age: (personDetail.age += 5),
  //   newNumber
};

//Spread Operator
let hobby = { hobby: "sports" };
let wholeDetail = { ...personDetail, ...hobby };
console.log("withHobby", wholeDetail);

//same object
let sameObjectAdd = { ...personDetail, ...personDetail2 };
console.log("sameObjectAdd", sameObjectAdd);

//Rest Parameter allows function to accept indifinite number of arguments as an array
function myFun(a, b, c, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six", "seven");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

// const a = +5
// const b += 5;   // const b = b+5
console.log("person", person);

// handleDelete = () => {
//   navigate("/object");
// };

const ObjectAdd = () => {
  //   navigate = useNavigate();
  return (
    <div className="ObjectAdditionMethod">
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.sex}</h3>
        <h3>{person.city}</h3>
      </div>
      {/* <button onClick={handleDelete()}>Delete</button> */}
      <Link to="/object">Delete</Link>
      <br></br>
      <Link to="/array">Array</Link>
      <br></br>
      <Link to="/ofobject">Array of Object</Link>
      <br></br>
      <Link to="/string">String Methods</Link>
    </div>
  );
};

export default ObjectAdd;
