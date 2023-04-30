import { useState } from 'react'
import './../styles/header.css'
import {MdKeyboardArrowUp} from 'react-icons/md'

function Header({setCat}) {

  const [dropDown, setDropDown] = useState(false)

  function clickCat(cat){
    menuToggle()
    setCat(cat)
  }
  function menuToggle(){
    setDropDown(!dropDown)
  }

  return( 
    <div id="header" className={dropDown ? "openMenu" : "closedMenu"}>
      <div id="headerTop">
        <img src="https://1000logos.net/wp-content/uploads/2022/12/IKEA-Logo-1982.png" alt="fakelogo"/>
        {/* <h2>Logo</h2> */}
        <h2 onClick={menuToggle}>Browse</h2>
      </div>
      <div id="dropDown">
        <div id="catList">
          <h3 onClick={()=>{clickCat('chairs')}}>Chairs</h3>
          <h3 onClick={()=>{clickCat('tables')}}>Tables</h3>
          <h3 onClick={()=>{clickCat('beds')}}>Beds</h3>
          <h3 onClick={()=>{clickCat('lamps')}}>Lamps</h3>
        </div>
          <h1 onClick={menuToggle}><MdKeyboardArrowUp /></h1>
      </div> 
    </div>
  );
}

export default Header;
