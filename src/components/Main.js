import { useState, useEffect } from "react";
import SinglePage from "./SinglePage.js";
import './../styles/main.css'
import pages from './../assets/pages.json'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'


function Main({cat, cart, cartRender, setCartRender}) {

    const [currentPage, setCurrentPage] = useState(pages[cat][0]);
    
    function findNeightbor(bool){
        let currIdx = Number(currentPage.title.slice(-1))
        if (currIdx === 0) currIdx = 9
        else currIdx--
        if (bool){
            setCurrentPage(currIdx < 9 ? pages[cat][currIdx+1] : pages[cat][0])
        } else {
            setCurrentPage(currIdx > 0 ? pages[cat][currIdx-1] : pages[cat][9])
        }
    }
    
    useEffect(() => {
        setCurrentPage(pages[cat][0])
    }, [cat, cart])
    
    return(
        <div className="main">
            <div id="catButtons" >
                {pages[cat].map(page=>{
                    return page.last ? (
                        <div key={page.title} className="catButton" onClick={()=>{setCurrentPage(page)}} >
                            <img src={page.imageRef} alt={page.title}/>
                        </div>
                    ) : <>
                        <div key={page.title} className="catButton" id={page === currentPage ? "selected" : ""} onClick={()=>{setCurrentPage(page)}}>
                            <img src={page.imageRef} alt={page.title}/>
                        </div>
                        <div className="catSeperator" id={page === currentPage ? "selectedSeperator" : ""}/>
                    </>
                })}
            </div>
            <div id="textBox">
                <SinglePage page={currentPage} cart={cart} cartRender={cartRender} setCartRender={setCartRender}/> 
                <div id="leftRightBtns">
                    <h1 onClick={()=>{findNeightbor(false)}}><MdKeyboardArrowLeft /></h1>
                    <h1 onClick={()=>{findNeightbor(true)}}><MdKeyboardArrowRight /></h1>
                </div>
            </div>
        </div>
    );
}

export default Main;