import Sound from 'react-sound'
// import happybirthday from '../music/happy-birthday.mp3'
import { useState, useEffect } from 'react'
import playic from '../images/playic.png'
import stopic from '../images/stopic.png'

const PlaySound = ({ song, button, loop, cl }) => {
    const [playStatus, setPlayStatus] = useState(false)
    return (
        <div>
            {button && <button onClick={() => setPlayStatus(!playStatus)}>{!playStatus ? <img className='mscon' src={playic} /> : <img className='mscon' src={stopic} />}</button>}
            {!button && <button className={cl} onClick={() => setPlayStatus(!playStatus)}>{!playStatus ? 'Play Me' : 'stop'}</button>}
            <Sound
                url={song}
                playStatus={playStatus ? Sound.status.PLAYING : Sound.status.STOPPED}
                autoLoad={true}
                loop={loop}
                volume={100}
                onFinishedPlaying={() => setPlayStatus(false)}
            />
        </div>
    )
}

export default PlaySound