import React from 'react'

function BackToTop() {

    const onClick = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="top-btn">
            <button className="top-button" onClick={onClick}><i className="fa fa-arrow-up"></i></button>
        </div>
    )
}

export default BackToTop
