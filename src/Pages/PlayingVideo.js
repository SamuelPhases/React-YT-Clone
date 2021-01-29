import React from 'react'
import './PlayingVideo.css'
import Navbar from '../components/Navbar'
import SingleVideo from '../components/SingleVideo'
import Suggestion from '../components/Suggestion'

function PlayingVideo() {
    return (
        <div className='playingVideo'>
            <Navbar />
            <div className="playingVideo-split">
                <SingleVideo />
                <Suggestion/>
            </div>
        </div>
    )
}

export default PlayingVideo
