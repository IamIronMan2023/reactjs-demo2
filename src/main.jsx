import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const element = <h1>Hello World!</h1>;
// root.render(element);

//------React coding using JS
// const element = React.createElement("h1", null, "Hello World");
// const element2 = React.createElement("h2", null, "Hello World");

// const elementMultiple = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", null, "Hello World"),
//   React.createElement("h2", null, "Hello World")
// );

// root.render(elementMultiple);

//----React coding using JSX

// const name = "juan";
// function getName() {
//   return name;
// }

// const element = (
//   <div>
//     <h1>Hello {name}</h1>
//     <h2>Hello {getName()}</h2>
//     <p>{2 * 2}</p>
//   </div>
// );

// root.render(element);

//-----------Class Component
// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }

//   render() {
//     return (
//       <>
//         <h2>Employee Profile</h2>

//         <p>
//           <label>Employee Id: {this.props.id}</label>
//         </p>
//         <p>
//           <label>First Name: {this.props.firstName}</label>
//         </p>
//         <p>
//           <label>Last Name: {this.props.lastName}</label>
//         </p>
//         <p>
//           <label>Age: {this.props.age}</label>
//         </p>
//         <Department
//           id={this.props.departmentId}
//           name={this.props.departmentName}
//         />
//       </>
//     );
//   }
// }

// class Department extends React.Component {
//   render() {
//     return (
//       <>
//         <h2>Department Information</h2>
//         <p>
//           <label>Department ID: {this.props.id}</label>
//         </p>
//         <p>
//           <label>Department Name: {this.props.name}</label>
//         </p>
//       </>
//     );
//   }
// }

// root.render(
//   <Employee
//     id="007"
//     firstName="James"
//     lastName="Bond"
//     age="unknown"
//     departmentId="1"
//     departmentName="CIA"
//   />
// );
