import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export function SampleProvider(props: Props) {
  const value = {} as SampleContextType;
  return <SampleContext.Provider value={value}>{props.children}</SampleContext.Provider>
}

export function useSample() {
  return useContext(SampleContext);
}


function useSampleContext() {
  const [color, setColor] = useState("black");
  return {
    color, 
    setColor
  };
}

type SampleContextType = ReturnType<typeof useSampleContext>;

const SampleContext = createContext({} as SampleContextType);