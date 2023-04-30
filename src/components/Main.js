import { useState, useEffect } from "react";
import SinglePage from "./SinglePage.js";
import './../styles/main.css'
import pages from './../assets/pages.json'

function Main({cat}) {

    const [currentPage, setCurrentPage] = useState(pages[cat][0]);

    useEffect(() => {
        setCurrentPage(pages[cat][0])
    }, [cat])
    
    return(
        <div className="main">
            <div id="catButtons" >
                {pages[cat].map(page=>{
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
                <SinglePage page={currentPage} cat={cat}/> 
            </div>
        </div>
    );
}

export default Main;