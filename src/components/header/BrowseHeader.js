import './../../styles/header.css'

function BrowseHeader({setCat, setDropDown, clickCat}) {

  return(
        <div id="catList">
            <h3 onClick={()=>{clickCat('chairs')}}>Chairs</h3>
            <h3 onClick={()=>{clickCat('tables')}}>Tables</h3>
            <h3 onClick={()=>{clickCat('beds')}}>Beds</h3>
            <h3 onClick={()=>{clickCat('lamps')}}>Lamps</h3>
          </div>
  );
}

export default BrowseHeader;
