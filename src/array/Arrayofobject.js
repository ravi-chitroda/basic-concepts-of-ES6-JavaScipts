import React from "react";

const arrayofobject = () => {
  const employees = [
    { id: 1, name: "Ravi", age: 31, email: "ravi@test.com" },
    { id: 2, name: "Shani", age: 18, email: "Shani@test.com" },
    { id: 3, name: "Mangal", age: 20, email: "Mangal@test.com" },
    { id: 4, name: "Guru", age: 17, email: "Guru@test.com" },
  ];

  return (
    <div className="rawData">
      <h2>Employee Data</h2>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>EMail</th>
          </tr>

          {employees.map((employee, index) => (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        {employees
          .filter((employee) => employee.age > 18)
          .map((filteredPerson) => (
            <li>{filteredPerson.name}</li>
          ))}
      </div>
    </div>
  );
};
export default arrayofobject;
