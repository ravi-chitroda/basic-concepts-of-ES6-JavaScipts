import React from "react";

const personDetail = { name: "Ravi", age: 31, sex: "male", city: "Vadodara" };
delete personDetail.city;
const person = personDetail;
console.log("person", person);

const ObjectDelete = () => {
  return (
    <div className="ObjectAdditionMethod">
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.sex}</h3>
        <h3>{person.city}</h3>
      </div>
    </div>
  );
};

export default ObjectDelete;
