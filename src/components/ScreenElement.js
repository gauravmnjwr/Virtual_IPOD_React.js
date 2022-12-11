import './App.css'
import ZingTouch from 'zingtouch';
import { useState } from 'react';
var angle = 15;

var zt;
var myElement;
var lastangle = angle;

setTimeout(() => {
    zt = new ZingTouch.Region(document.body);
    myElement = document.getElementById('buttonsdiv');
    zt.bind(myElement, 'rotate', function (event) {
        angle += event.detail.distanceFromLast;
        console.log(angle,lastangle);
    }, false);
}, 1000);





function ScreenElement({ labels }) {
    const [isSelected, setIsSelected] = useState(0);
    const handleClick = (name) => {
        console.log(name);
    }
    

    if(angle-lastangle>15 || lastangle-angle>15){
        if(isSelected===4){
            setIsSelected=0;
        }
        setIsSelected(isSelected+1);
    }



    const renderedLabels = labels.map((name, index) => {
        if (index === isSelected) {
            return <div style={{ backgroundColor: 'blue' }} key={index} onClick={() => handleClick(name)}>{name}</div>
        }
        else {
            return <div key={index} onClick={() => handleClick(name)}>{name}</div>
        }
    })
    return <>{renderedLabels}</>
}

export default ScreenElement;