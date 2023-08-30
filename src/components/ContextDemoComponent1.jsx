import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSampleContext } from "../contexts/SampleContext";

const ContextDemoComponent1 = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { data, setData } = useSampleContext();

  const handleClick = (e) => {
    e.preventDefault();
    setData(message);
    navigate("/Demo2");
  };
  return (
    <>
      <h2>Context Demo 1 Page</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Go to Demo2</button>

      <p>
        Message from Demo 2 Component: <b>{data}</b>
      </p>
    </>
  );
};

export default ContextDemoComponent1;
