import React from 'react'
import Thumbnail from './Thumbnail'
import './ThumbnailGroup.css'

function ThumbnailGroup({videoCategory}) {
  {  console.log(videoCategory)}
    return (
        <div className='thumbnailGroup'>
            
            { videoCategory &&  videoCategory.map((videoLink) => {
                return (
                    <Thumbnail videoLink={ videoLink } key = {videoLink.id} />
                    // <div className="thu">ok</div>
                )
            })}
            {/* <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/> */}
        </div>
    )
}

export default ThumbnailGroup
