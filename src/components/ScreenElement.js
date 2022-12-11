import './App.css'

function ScreenElement({ labels }) {

    const handleClick = (name) =>{
        console.log(name)
    }

    const renderedLabels = labels.map((name) => {
        return <div onClick={()=>handleClick(name)}>{name}</div>
    })
    return <>{renderedLabels}</>
}

export default ScreenElement;