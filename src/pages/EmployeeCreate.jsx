import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/employees`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        first_name: employee.firstName,
        last_name: employee.lastName,
        age: employee.age,
        email: employee.email,
        gender: employee.gender,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate(`/employees/${json.employee.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1>Employee Create</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={employee.age}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Gender</label>
          <select name="gender" value={employee.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </p>
        <input type="submit" value="Save" />
      </form>
    </>
  );
};

export default EmployeeCreate;
