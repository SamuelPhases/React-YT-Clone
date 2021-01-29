import React from 'react'
import './Thumbnail.css'

import  TextTruncate  from  'react-text-truncate'


function Thumbnail({videoLink}) {
    return (
        <div className='thumbnail'>
            <div className="thumbnail-video">
                <img src={videoLink.thumbnails.medium.url} alt=""/>
            </div>  
            <div className="thumbnail-details">
                <div className="dp">
                    <img src={ videoLink.maxRes.url } alt=""/>
                </div>
                <div className="details">
                    <h3>
                        <TextTruncate
                            line={2}
                            element='h3'
                            truncateText='...'
                            text= {videoLink.title}
                        />
                    </h3>
                    <p>{ videoLink.channel.title }</p>
                    <div className="views-dur">
                        <p>90b  <span>views</span></p>
                        &middot;
                    <p>{videoLink.raw.snippet.publishedAt}</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Thumbnail
