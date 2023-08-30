import { useState, useContext, createContext } from "react";

export const SampleContext = createContext();

export function SampleProvider({ children }) {
  const [data, setData] = useState("");

  return (
    <SampleContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
}
