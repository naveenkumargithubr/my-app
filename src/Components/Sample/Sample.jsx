import React, { useState, useEffect } from "react";
import "./Sample.css";

const Sample = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");

  // input data
  const empDetails = { name, role, email, dept };
  const url = "http://localhost:3005/books";

  const onSubmitForm = async (event) => {
    event.preventDefault();
    console.log(empDetails);

    try {
      const response = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(empDetails),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      const data = await response.json();
      alert("Data posted Successfully");
    } catch (error) {
      console.log(error);
      alert("Sorry data failed to post ");
    }
  };

  return (
    <div>
      <h1>Employee form</h1>
      <div className="-">
        <div className="form-section">
          <form onSubmit={onSubmitForm}>
            <label htmlFor="name">Employee Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="role">Employee Role</label>
            <br />
            <input
              type="text"
              placeholder="Enter role"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="email">Employee Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="dep">Employee Department</label>
            <br />
            <input
              type="text"
              placeholder="Enter dept"
              id="dep"
              name="dept"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sample;
