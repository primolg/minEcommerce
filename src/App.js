//components
import Main from "./components/Main";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [cat, setCat] = useState('chairs')
  const [cart] = useState(new Map())
  const [cartRender, setCartRender] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownCat, setDropDownCat] = useState('browse');

  return(
    <div id="app">
      <Header setCat={setCat} cart={cart} cartRender={cartRender} setCartRender={setCartRender} dropDown={dropDown} setDropDown={setDropDown} dropDownCat={dropDownCat} setDropDownCat={setDropDownCat}/>
      <Main cat={cat} cart={cart} cartRender={cartRender} setCartRender={setCartRender} setDropDown={setDropDown} setDropDownCat={setDropDownCat}/>
    </div>
  );
}

export default App;
