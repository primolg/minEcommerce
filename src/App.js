//components
import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [cat, setCat] = useState('chairs')
  const [cart] = useState(new Map())
  const [cartRender, setCartRender] = useState(true);

  return(
    <div id="app">
      <Header setCat={setCat} cart={cart} cartRender={cartRender} setCartRender={setCartRender}/>
      <Main cat={cat} cart={cart} cartRender={cartRender} setCartRender={setCartRender}/>
    </div>
  );
}

export default App;
