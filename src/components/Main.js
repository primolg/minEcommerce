import { useState } from "react";
import SinglePage from "./SinglePage.js";
import './../styles/main.css'
import pages from './../assets/pages.json'

function Main() {

    const [currentPage, setCurrentPage] = useState(pages.pages[0]);
    
    return(
        <div className="main">
            <div id="catButtons" >
                {pages.pages.map(page=>{
                    return page.last ? (
                        <div key={page.title} className="catButton" onClick={()=>{setCurrentPage(page)}}>
                            <img src={page.imageRef} alt={page.title}/>
                        </div>
                    ) : <>
                        <div key={page.title} className="catButton" onClick={()=>{setCurrentPage(page)}}>
                            <img src={page.imageRef} alt={page.title}/>
                        </div>
                            <div className="catSeperator"/>
                    </>
                })}
            </div>
            <div id="textBox">
                <SinglePage page={currentPage}/> 
            </div>
        </div>
    );
}

export default Main;