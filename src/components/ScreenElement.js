import './App.css'
import ZingTouch from 'zingtouch';
import { useState, useRef, useEffect } from 'react';

var angle = 15;
var currdiv = 0;
function ScreenElement({ labels, getScreenElement }) {
    const [number, setNumber] = useState(angle);
    const handleClick = (name) => {
        console.log(name);
    }
    const prevValue = useRef(null);
    useEffect(() => {
        prevValue.current = number;
    }, [number]);

    var zt;
    var myElement;
    getScreenElement(currdiv);


    setTimeout(() => {
        zt = new ZingTouch.Region(document.body);
        myElement = document.getElementById('buttonsdiv');
        zt.bind(myElement, 'rotate', function (event) {
            angle += event.detail.distanceFromLast
            setNumber(angle + event.detail.distanceFromLast);
        }, false);
    }, 1000);

    if ((number - prevValue.current) > 700) {    
        
        if (currdiv === 3) {
            currdiv = -1;
        }
        console.log(currdiv)
        currdiv++;
    }

    


    const renderedLabels = labels.map((name, index) => {
        if (index === currdiv) {
            return <div onClick={() => handleClick(name)} style={{ backgroundColor: '#3899da', textDecoration: 'underline' }} key={index}> <span>{name}{' '} &nbsp; <img src="https://cdn-icons-png.flaticon.com/512/8045/8045243.png" alt="arrow" /></span></div>
        }
        else {
            return <div key={index} onClick={() => handleClick(name)}>{name}</div>
        }
    })
    return <>{renderedLabels}</>
}

export default ScreenElement;