import './../styles/singlePage.css'

function AboutMe({page}) {

  return(
    <div id='currentPage'>
      <div id="leftSide">
        <img src={page.imageRef} alt={page.title} />
      </div>
      <div id="rightSide">
        <h2>{page.title}</h2>
        <div id='infoText'>
          <h4>{page.text1}<br></br></h4>
          <h4>{page.text2}<br></br></h4>
          <h4>{page.text3}</h4>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
