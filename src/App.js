//components
import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [cat, setCat] = useState('chairs')

  return(
    <div id="app">
      <Header setCat={setCat}/>
      <Main cat={cat}/>
    </div>
  );
}

export default App;
