const Department = (department) => {
  return (
    <>
      <h2>Department Information</h2>
      <p>
        <label>Department ID: {department.id}</label>
      </p>
      <p>
        <label>Department Name: {department.name}</label>
      </p>
    </>
  );
};

// class Department extends Component {
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

export default Department;
