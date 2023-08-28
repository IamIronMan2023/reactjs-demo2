import Department from "./DepartmentComponent";

const Employee = (employee) => {
  return (
    <>
      <h2>Employee Profile</h2>

      <p>
        <label>Employee Id: {employee.id}</label>
      </p>
      <p>
        <label>First Name: {employee.firstName}</label>
      </p>
      <p>
        <label>Last Name: {employee.lastName}</label>
      </p>
      <p>
        <label>Age: {employee.age}</label>
      </p>
      <Department id={employee.departmentId} name={employee.departmentName} />
    </>
  );
};

// class Employee extends Component {
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

export default Employee;
