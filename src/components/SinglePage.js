import './../styles/singlePage.css'

function SinglePage({page, cart, cartRender, setCartRender, setDropDown, setDropDownCat}) {
  
  function addToCart(){
    if (cart.has(page.title)){
      const qty = cart.get(page.title).qty
      cart.set(page.title, {qty: qty < 10 ? qty + 1 : qty, price:page.price, imageRef:page.imageRef})
    } else {
      cart.set(page.title, {qty: 1, price:page.price, imageRef:page.imageRef})
      setDropDown(true)
      setDropDownCat('cart')
    }
    setCartRender(!cartRender)
  }
  
  return(
    <div id='currentPage'>
      <div id="leftSide">
          <img src={page.imageRef} alt={page.title} />
      </div>
      <div id="rightSide">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <h1>{page.title}</h1>
          <h2 id="addCartBtn" onClick={addToCart}>add to cart</h2>
        </div>
        <div id='infoText'>
          <h4>{page.text1}<br></br></h4>
          <h4>{page.text2}<br></br></h4>
          <h4>{page.text3}<br></br><br></br><br></br></h4>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
