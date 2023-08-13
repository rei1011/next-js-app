"use client";

import { createContext, useContext } from "react";
import { SampleProvider } from "./provider";

export function ContextSample() {
  const hoge = useContext(ThemeContext);
  return <SampleProvider>{hoge}<Button></Button></SampleProvider>;
}

function Button() {
  const hoge = useContext(ThemeContext);
  return (<ThemeContext.Provider value="dark"><button>
    <Button2></Button2>
  </button></ThemeContext.Provider>);
}

function Button2() {
  const color = useContext(ThemeContext);
  return <>{color}</>
}

const ThemeContext = createContext("white");
