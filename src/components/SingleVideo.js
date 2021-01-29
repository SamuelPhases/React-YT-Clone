import React from 'react'
import Comment from './Comment'
import './SingleVideo.css'

import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

function SingleVideo() {
    return (
        <div className='singleVideo'>
            <div className="vid-container"></div>
            <div className="vid-details">
                <div className='tagDetails'>
                    <p>#tags</p>
                </div>
                <div className='id'>
                    <h3>Lorem Lipa - Don't jump</h3>
                </div>
                <div className="fav">
                    <div className="likes">
                        <p>10,947,388 views</p>
                        <FiberManualRecordRoundedIcon/>
                        <p>November 21, 2020</p>
                    </div>
                    <div className="clicks">
                        <div>
                            <p>share</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="channel">
                <div className="dp"></div>
                <div className="channel-details">
                    <h3>Lore Channel</h3>
                    <p>Lorem Lipa - Don't jump</p>
                    <div className='tag-row'>
                        <p>#tags</p>
                    </div>
                    <p className="show">show More</p>
                </div>
            </div>
            <div className="comment-row">
                <div  className='co-details'>
                    <h4>1,009 Comments</h4>
                    <div>
                        <p>sort by</p>
                    </div>
                </div>
                <div className="account-comment">
                    <div className="dp"></div>
                    <form action="">
                        <input type="text" name="" id="" placeholder='Add a public comment' />
                    </form>
                </div>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    )
}

export default SingleVideo
