import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SampleContext } from "../contexts/SampleContext";

const ContextDemoComponent2 = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { data, setData } = useContext(SampleContext);

  const handleClick = (e) => {
    e.preventDefault();
    setData(message);
    navigate("/Demo1");
  };
  return (
    <>
      <h2>Context Demo 2 Page</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Go to Demo1</button>
      <p>
        Message from Demo 1 Component: <b>{data}</b>
      </p>
    </>
  );
};

export default ContextDemoComponent2;
