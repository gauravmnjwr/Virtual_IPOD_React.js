import './App.css'
function Buttons({handleSelect,handleMenuClick}){

    const handleOnClick = () =>{
        // handling when button is clicked
        handleSelect();
    }

    const menuClick = () =>{
        //handle when menu button is clicked
        handleMenuClick();
    }

    return <div id='button-container'>
        <div id='buttonsdiv'>
            <img src="https://cdn-icons-png.flaticon.com/512/2/2147.png" alt="" id='img1'/>
            <img src="https://cdn-icons-png.flaticon.com/512/1/1371.png" alt="" id='img2'/>
            <img src="https://cdn-icons-png.flaticon.com/512/54/54366.png" alt="" id='img3'/>
            <img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="" id='img4' onClick={menuClick}/>
            <button id='select-button' onClick={handleOnClick}>
            </button>
        </div>
    </div>
}


export default  Buttons;