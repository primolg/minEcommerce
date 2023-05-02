//components
import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [cat, setCat] = useState('chairs')
  const [cart] = useState(new Map())

  return(
    <div id="app">
      <Header setCat={setCat} cart={cart}/>
      <Main cat={cat} cart={cart}/>
    </div>
  );
}

export default App;
