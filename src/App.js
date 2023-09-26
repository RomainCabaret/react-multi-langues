import React from "react";
import Content from "./Components/Contenu/Content";
import TogleLangs from "./Components/ToggleLangs/TogleLangs";
import ContextProvider from "./context/langContext";

function App() {
  return (
    <ContextProvider>
      <TogleLangs />
      <Content />
    </ContextProvider>
  );
}

export default App;
