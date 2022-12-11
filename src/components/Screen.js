import './App.css'
import ScreenElement from './ScreenElement';
function MainIpod() {
    const labels = ['Cover Flow','Music','Games', 'Settings'];

    return <div id='screendiv'>
        <div id='listdiv'>
            <ScreenElement labels={labels}/>
        </div>

    </div>
}

export default MainIpod;