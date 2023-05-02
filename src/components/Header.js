import { useState } from 'react'
import './../styles/header.css'
import {MdKeyboardArrowUp} from 'react-icons/md'

function Header({setCat, cart}) {
  const [dropDown, setDropDown] = useState(false)
  const [dropDownCat, setDropDownCat] = useState('browse')

  function clickCat(cat){
    setDropDown(false)
    setCat(cat)
  }
  function menuToggle(type){
    if (dropDown){
      setDropDown(!dropDown)
      if (type !== dropDownCat){
        setTimeout(()=>{
          setDropDownCat(type)
          setDropDown(true)
        }, 600)
      } else {
        setDropDownCat(type)
        setDropDown(!dropDown)
      }
    } else {
      setDropDownCat(type)
      setDropDown(!dropDown)
    }
  }

  return( 
    <div id="header" className={dropDown ? "openMenu" : "closedMenu"}>
      <div id="headerTop">
        <img src="https://1000logos.net/wp-content/uploads/2022/12/IKEA-Logo-1982.png" alt="fakelogo"/>
        {/* <h2>Logo</h2> */}
        <h2 onClick={()=>{menuToggle('browse')}}>Browse</h2>
        <h2 onClick={()=>{menuToggle('cart')}}>Cart</h2>
      </div>
      <div id="dropDown">
        {dropDownCat === 'cart' ? 
          <div id="headerCart">
            hello
          </div>:
        <div id="catList">
            <h3 onClick={()=>{clickCat('chairs')}}>Chairs</h3>
            <h3 onClick={()=>{clickCat('tables')}}>Tables</h3>
            <h3 onClick={()=>{clickCat('beds')}}>Beds</h3>
            <h3 onClick={()=>{clickCat('lamps')}}>Lamps</h3>
          </div>
        }
          <h1 onClick={()=>{setDropDown(false)}}><MdKeyboardArrowUp /></h1>
      </div> 
    </div>
  );
}

export default Header;
