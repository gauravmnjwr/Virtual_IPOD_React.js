import Screen from "./Screen";
import Buttons from "./Buttons";
import './App.css'
import CoverFlow from './screenComponents/CoverFlow';
import Settings from './screenComponents/Settings';
import Music from './screenComponents/Music';
import Games from './screenComponents/Games';
import { useEffect, useState } from "react";

function App() {

    const [newScreen,setNewScreen] = useState(0);
    const [buttonClicked,setButtonClicked] = useState(-1);
    
    const handleSelect = (element) => {
        //button
        setButtonClicked(newScreen);
        // console.log(element)
    }
    const getScreenElement = (element) => {
        //screen
        setNewScreen(element)

    }

    const handleMenuClick = () =>{
        setButtonClicked(-1);
    }

    return (<div id="main-container" >
        {newScreen}
        {buttonClicked===-1 && <Screen getScreenElement={getScreenElement}/>}
        {buttonClicked===0 && <div id='screendiv'><CoverFlow/></div>}
        {buttonClicked===1 && <div id='screendiv'><Music/></div>}
        {buttonClicked===2 && <div id='screendiv'><Games/></div>}
        {buttonClicked===3 && <div id='screendiv'><Settings/></div>}
        <Buttons handleSelect={handleSelect} handleMenuClick={handleMenuClick}/>
    </div>);
}



export default App;