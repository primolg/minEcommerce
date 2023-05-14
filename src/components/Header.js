import { useEffect, useState } from 'react'
import './../styles/header.css'
import {IoIosClose} from 'react-icons/io'
import {RiShoppingBagLine} from 'react-icons/ri'
import {BiMenu} from 'react-icons/bi'

function Header({setCat, cart, cartRender, setCartRender}) {

  const [dropDown, setDropDown] = useState(false)
  const [dropDownCat, setDropDownCat] = useState('browse')

  let cartList = []
  cart.forEach((key, value)=> {
    cartList.push({title: value, qty: key.qty, price: key.price, imageRef: key.imageRef})
  })

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

  function cartItemEdit(item, action){
    if (action === "add"){
      cart.set(item.title, {qty: cart.get(item.title).qty+1, price:item.price, imageRef:item.imageRef})
    } else if (action === "subtract"){
      let qty = cart.get(item.title).qty
      if (qty > 1){
        cart.set(item.title, {qty: qty - 1, price:item.price, imageRef:item.imageRef})
      } else {
        cart.delete(item.title)
      }
    } else if (action === "remove"){
      cart.delete(item.title)
    }
    setCartRender(!cartRender)
  }

  useEffect(()=>{}, [cart])
  return( 
    <div id="header" className={dropDown ? dropDownCat === "browse" ? "openMenu" : "openMenuCart" : "closedMenu"}>
      <div id="headerTop">
        <div id="logoBrowse">
          <img src="https://1000logos.net/wp-content/uploads/2022/12/IKEA-Logo-1982.png" alt="fakelogo"/>
          <h2 onClick={()=>{menuToggle('browse')}}><BiMenu /></h2>
        </div>
        <h2 onClick={()=>{menuToggle('cart')}}><RiShoppingBagLine /></h2>
      </div>
      <div id={dropDownCat === 'cart' ? "cartDropDown" : "dropDown"}>
        {dropDownCat === 'cart' ? 
          <div id="headerCart">
            {cartList.map((item)=>{
              return(
                <div className='cartItem' key={item.title}>
                  <img src={item.imageRef} alt={item.title} />
                  <div className='cartItemDesc'>
                    <h5>{item.title}</h5>
                    <h5>{item.price}</h5>
                    <h5>{item.qty}</h5>
                    <div style={{display: "flex"}}>
                      <h5 onClick={()=>{cartItemEdit(item, "add")}}>+</h5>
                      <h5 onClick={()=>{cartItemEdit(item, "subtract")}}>-</h5>
                    </div>
                    <h5 onClick={()=>{cartItemEdit(item, "remove")}}>rm</h5>
                  </div>
                </div>
              )
            })}
          </div>:
        <div id="catList">
            <h3 onClick={()=>{clickCat('chairs')}}>Chairs</h3>
            <h3 onClick={()=>{clickCat('tables')}}>Tables</h3>
            <h3 onClick={()=>{clickCat('beds')}}>Beds</h3>
            <h3 onClick={()=>{clickCat('lamps')}}>Lamps</h3>
          </div>
        }
          <h1 onClick={()=>{setDropDown(false)}}><IoIosClose /></h1>
      </div> 
    </div>
  );
}

export default Header;
