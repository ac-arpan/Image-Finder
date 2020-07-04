import React from 'react'
import Tags from './Tags'
import userImg from './user.png'

function ImageCards({ height, url, comments, favorites, downloads, likes, pageURL, tags, userImageURL, user, views, tagSearch }) {

    const authorImageSource = userImageURL.length === 0 ? userImg : userImageURL

    const rotateCard = e => {
        console.log(e.target);
        
        const card = e.target.parentElement
        const cardContent = e.target.nextSibling
        const downloadLink = cardContent.nextSibling
        const tags = downloadLink.nextSibling
        const backSide = tags.nextSibling

        e.target.style.display = 'none'
        cardContent.style.display = 'none'
        downloadLink.style.display = 'none'
        tags.style.display = 'none'
        backSide.style.display = 'flex'


        card.style.animation = 'rotate 0.5s linear forwards'

        
    }

    const rotateCardAgain = e => {
        const card = e.target.parentElement
        const tags = e.target.previousSibling
        const downloadLink = tags.previousSibling
        const cardContent = downloadLink.previousSibling
        const image = cardContent.previousSibling

        e.target.style.display = 'none'
        cardContent.style.display = 'flex'
        cardContent.style.transform = 'rotateY(180deg)'
        downloadLink.style.display = 'flex'
        downloadLink.style.transform = 'rotateY(180deg)'
        image.style.display = 'inline'
        image.style.transform = 'rotateY(180deg)'
        tags.style.display = 'block'
        tags.style.transform = 'rotateY(180deg)'

        card.style.animation = 'rotateneg 0.5s linear forwards'
        
        
    }

    return (
        <div className="cards" >
            <img src={url} height={height} width="100%" alt={''} onClick={rotateCard}></img>
            <div className="card-content">
                <div>
                    <i className="fa fa-comment-o text text-green"></i><span className="text">{comments}</span>
                </div>
                <div>
                    <i className="fa fa-arrow-down text text-blue"></i><span className="text">{downloads}</span>
                </div>
                <div>
                    <i className="fa fa-heart text text-red"></i><span className="text">{favorites}</span>
                </div>
                <div>
                    <i className="fa fa-thumbs-up text text-sky"></i><span className="text">{likes}</span>
                </div>
            </div>
            <div className="download-link">
                <a target="_blank" href={pageURL} style={{textDecoration:'none'}}>
                    <i className="fa fa-arrow-circle-o-down text-blue"></i>{' '}{' '}<span  className="text-fade" ><em>Download Image</em></span>
                </a>
                <div><i className="fa fa-eye text text-green"></i>{' '}<span className="text">{views}</span></div>
            </div>
            <div className="tags">
                <Tags tags= {tags} tagSearch = {tagSearch}/>
            </div>
            <div className="back-side" onClick={rotateCardAgain}>
                <p>Photo By </p>
                <img src={authorImageSource} height="100px" width="100px" style={{borderRadius:'50%'}} alt={''}></img>
                <div className="name text text-blue"> @{user}</div>
            </div>
        </div>
    )
}

export default ImageCards
