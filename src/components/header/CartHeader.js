import './../../styles/header.css'
import {FiTrash2} from 'react-icons/fi'

function CartHeader({cart, cartRender, setCartRender}) {
  let total = 0
  let cartList = []
  const zeroToTen = [...new Array(10)]
  
  cart.forEach((key, value)=> {
    total += (key.price * key.qty)
    cartList.push({title: value, qty: key.qty, price: key.price, imageRef: key.imageRef})
  })
  
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

  return(
          <div id="headerCart">
            {cartList.map((item)=>{
              return(
                <div className='cartItem' key={item.title}>
                  <img src={item.imageRef} alt={item.title} />
                  <div className='cartItemDesc'>
                    <select defaultValue={item.qty}>
                      {zeroToTen.map((key, value)=>{
                        value++
                        return (
                          <option value={value}>{value}</option>
                        )
                      })}
                    </select>
                    <h4 onClick={()=>{cartItemEdit(item, "remove")}}><FiTrash2/></h4>
                  </div>
                </div>
              )
            })}
          </div>
  );
}

export default CartHeader;
