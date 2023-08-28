import { useEffect, useState } from "react";

const UseEffectDemoComponent = () => {
  const [greeting, setGreeting] = useState("");

  //State Change
  //   useEffect(() => {
  //     console.log("greeting state changed");
  //   }, [greeting]);

  //Mount
  //   useEffect(() => {
  //     console.log("Mount");
  //   }, []);

  //Unmount
  //   useEffect(() => {
  //     return () => {
  //       console.log("Unmount");
  //     };
  //   }, [greeting]);

  return (
    <>
      <h2>Use Effect Demo</h2>
      <p>
        <button onClick={() => setGreeting("Hi")}>Say Hi</button>
      </p>

      <p>
        <button onClick={() => setGreeting("Hello")}>Say Hello</button>
      </p>

      <p>{greeting}</p>
    </>
  );
};

export default UseEffectDemoComponent;
