import './App.css'
import ScreenElement from './ScreenElement';
function MainIpod({ getScreenElement }) {
    const labels = ['Cover Flow', 'Music', 'Games', 'Settings'];
    return <div id='screendiv'>
        <div id='listdiv'>
            <ScreenElement labels={labels} getScreenElement={getScreenElement} />
        </div>

    </div>
}

export default MainIpod;