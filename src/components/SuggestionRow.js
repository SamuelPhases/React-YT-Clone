import React from 'react'
import './SuggestionRow.css'

function SuggestionRow() {
    return (
        <div className='suggestionRow'>
            <div className="col-flex">
                <div className="vidBox"></div>
                <div className="snip-details">
                    <h4>Lorem Lipa</h4>
                    <p>Bright</p>
                    <div className="views-dur">
                        <p>10b <span>views</span></p>
                        &middot;
                        <p>1 month ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionRow
