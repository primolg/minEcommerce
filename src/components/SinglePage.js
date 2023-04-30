import './../styles/singlePage.css'

function AboutMe({page}) {
  
  return(
    <div id='currentPage'>
      <div id="leftSide">
          <img src={page.imageRef} alt={page.title} />
      </div>
      <div id="rightSide">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <h1>{page.title}</h1>
          <h2 id="addCartBtn">add to cart</h2>
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

export default AboutMe;
