import { useState, useContext, createContext } from "react";

const SampleContext = createContext();

export function useSampleContext() {
  return useContext(SampleContext);
}

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
