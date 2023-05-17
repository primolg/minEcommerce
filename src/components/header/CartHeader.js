import './../../styles/header.css'
import {FiTrash2} from 'react-icons/fi'
import { useEffect, useState } from 'react'

function CartHeader({cart, cartRender, setCartRender}) {
  let cartList = []
  const zeroToTen = [...new Array(10)]
  let total = 0

  cart.forEach((key, value)=> {
    total += Number(key.price * key.qty)
    cartList.push({title: value, qty: key.qty, price: key.price, imageRef: key.imageRef})
  })

  function cartItemEdit(item, action, newCount){
    if (action === "remove"){
      cart.delete(item.title)
    } else if (action === "change"){
      cart.set(item.title, {qty: newCount, price:item.price, imageRef:item.imageRef})
    }
    setCartRender(!cartRender)
  }

  return(
          <div id="headerCart">
            <div id="cartItemsOuter">
              <div id="cartItems">
              {cartList.map((item)=>{
                return(
                  <div className='cartItem' key={item.title}>
                    <img src={item.imageRef} alt={item.title} />
                    <div className='cartItemDesc'>
                      <select className="cartChange" defaultValue={item.qty} onChange={event=>{cartItemEdit(item, "change", event.target.value)}}>
                        {zeroToTen.map((key, value)=>{
                          value++
                          return (
                            <option value={value}>{value}</option>
                            )
                          })}
                      </select>
                      <div className="trashCan">
                        <h5 onClick={()=>{cartItemEdit(item, "remove")}}><FiTrash2/></h5>
                      </div>
                    </div>
                  </div>
                )
              })}
              </div>
            </div>
            <div id="checkout">
              <div id="subtotal">
                <h5>subtotal</h5>
                <h4>${total ? total.toString().slice(0, -2) : 0}.00</h4>
              </div>
              <h2 id="checkoutBtn">checkout</h2>
            </div>
          </div>
  );
}

export default CartHeader;
