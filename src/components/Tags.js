import React from 'react'

function Tags({ tags, tagSearch }) {
    const tagList = tags.split(',')
    
    const hanldeClick = e => {

        const searchTerm = e.target.innerText.slice(1, e.target.innerText.length + 1).trim().split(' ').join('+')
        tagSearch(searchTerm)
        
    }
    return (
        <div className="tag-list">
            {
                tagList.map(tag => <div type="submit" className="tag" onClick={hanldeClick}>#{tag}</div>)
            }
        </div>
    )
}

export default Tags
