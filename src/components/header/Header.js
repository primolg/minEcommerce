import { useState } from 'react'
import './../../styles/header.css'
import BrowseHeader from './BrowseHeader'
import CartHeader from './CartHeader'
import {IoMdClose} from 'react-icons/io'
import {RiShoppingBagLine} from 'react-icons/ri'
import {BiMenu} from 'react-icons/bi'

function Header({setCat, cart, cartRender, setCartRender, dropDown, setDropDown, dropDownCat, setDropDownCat}) {


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
    <div id="header" className={dropDown ? dropDownCat === "browse" ? "openMenu" : "openMenuCart" : "closedMenu"}>
      <div id="headerTop">
        <div id="logoBrowse">
          <img src="https://1000logos.net/wp-content/uploads/2022/12/IKEA-Logo-1982.png" alt="fakelogo"/>
          {dropDown && dropDownCat === 'browse'? <h2 onClick={()=>setDropDown(false)}><IoMdClose/></h2> : <h2 onClick={()=>{menuToggle('browse')}}><BiMenu /></h2>}
        </div>
        {dropDown && dropDownCat === 'cart'? <h2 onClick={()=>setDropDown(false)}><IoMdClose/></h2> :<h2 onClick={()=>{menuToggle('cart')}}><RiShoppingBagLine /></h2>}
      </div>
      <div id={dropDownCat === 'cart' ? "cartDropDown" : "dropDown"}>
        {dropDownCat === 'cart' ? 
          <CartHeader cart={cart} cartRender={cartRender} setCartRender={setCartRender}/> :
          <BrowseHeader setCat={setCat} setDropDown={setDropDown}/>
        }
      </div> 
    </div>
  );
}

export default Header;
