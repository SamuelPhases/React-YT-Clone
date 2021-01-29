import React from 'react'
import './Suggestion.css'
import SuggestionRow from './SuggestionRow'

function Suggestion() {
    return (
        <div className='suggestion'>
            <div className="suggestion-header">
                <h3>up next</h3>
                <p>autoplay</p>
            </div>
            <div className="row">
                <SuggestionRow/>
            </div>
            <div className="row-group">
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
                <SuggestionRow/>
            </div>
        </div>
    )
}

export default Suggestion
