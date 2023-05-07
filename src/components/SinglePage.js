import { useEffect } from 'react'
import './../styles/singlePage.css'
// import ModalImage from "react-modal-image";


function SinglePage({page, cart, cartRender, setCartRender}) {
  
  function addToCart(){
    if (cart.has(page.title)){
      cart.set(page.title, {qty: cart.get(page.title).qty+1, price:page.price, photo:page.imageRef})
    } else {
      cart.set(page.title, {qty: 1, price:page.price})
    }
    setCartRender(!cartRender)
  }
  return(
    <div id='currentPage'>
      <div id="leftSide">
          <img src={page.imageRef} alt={page.title} />
          {/* <ModalImage
            small={page.imageRef}
            large={page.imageRef}
            alt="Hello World!"
          /> */}
      </div>
      <div id="rightSide">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <h1>{page.title}</h1>
          <h2 id="addCartBtn" onClick={addToCart}>add to cart</h2>
        </div>
        <div id='infoText'>
          <h3>{page.text1}<br></br></h3>
          <h3>{page.text2}<br></br></h3>
          <h3>{page.text3}</h3>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
