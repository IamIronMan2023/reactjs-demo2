const EventComponent = () => {
  const handleClick = (e) => {
    const buttonId = e.target.id;
    alert(`Button is click by button with id = ${buttonId}`);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    console.log(`input box name = ${name} value = ${value}`);
  };

  return (
    <>
      <h2>Event Component</h2>
      <p>
        <label>First Name </label>
        <input type="text" name="firstName" onChange={handleChange} />
      </p>
      <p>
        <label>Last Name </label>
        <input type="text" name="lastName" onChange={handleChange} />
      </p>
      <p>
        <button id="btnClickMe" onClick={handleClick}>
          Click Me
        </button>
      </p>
      <p>
        <button
          id="btnClickMe2"
          onClick={(e) =>
            alert(`Button is click by button with id = ${e.target.id}`)
          }
        >
          Click Me
        </button>
      </p>
    </>
  );
};

export default EventComponent;
