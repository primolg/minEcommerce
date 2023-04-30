import './../styles/singlePage.css'

function AboutMe({page}) {
  
  return(
    <div id='currentPage'>
      <div id="leftSide">
        <img src={page.imageRef} alt={page.title} />
      </div>
      <div id="rightSide">
        <h1>{page.title}</h1>
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
