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
          <h3>{page.text1}<br></br></h3>
          <h3>{page.text2}<br></br></h3>
          <h3>{page.text3}</h3>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
