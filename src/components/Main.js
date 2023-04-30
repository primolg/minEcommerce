import { useState } from "react";
import SinglePage from "./SinglePage.js";
import './../styles/Main.css'
import pages from './../assets/pages.json'

function Main() {

    const [currentCat, setCurrentCat] = useState(undefined);
    if (!currentCat){
        setCurrentCat("about-me")
    }
    
  return(
    <div className="main">
        <div id="catButtons" >
            {pages.pages.map(page=>{
                return page.last ? (
                    <div key={page.title} className="catButton">
                        <img src={page.imageRef} alt={page.title}/>
                    </div>
                ) : <>
                    <div key={page.title} className="catButton">
                        <img src={page.imageRef} alt={page.title}/>
                    </div>
                        <div className="catSeperator"/>
                </>
            })}
            {/* <div className="cat-button about-me-clrs" onClick={()=>{setCurrentCat("about-me")}}>about me</div> */}
        </div>
        <div id="text-box" className={currentCat ? (currentCat + "-clrs") : ""}>
            <SinglePage /> 
        </div>
    </div>
  );
}

export default Main;