import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCards from './ImageCards';
import { BeatLoader } from 'react-spinners'


const PIXABOY_API_KEY = '17276997-1b818618fc0eac61cdc8c684c'

function Gallery() {

    const [images, setImages] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [searchTerm, setSearchTerm] = useState('Dogs')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    
    useEffect(() => {
        
        setLoading(true)
        axios.get(`https://pixabay.com/api/?key=${PIXABOY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true&per_page=200`)
            .then(res => {
                setImages(res.data.hits)
                setLoading(false)
                res.data.hits.length === 0 ? setError("Sorry! No Image Found...") : setError('')   
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [searchTerm])

    const handleSubmit = e => {
        e.preventDefault()
        setSearchTerm(searchInput.split(' ').join('+'))
        setSearchInput('')
    }

    const tagSearch = newSearchTerm => setSearchTerm(newSearchTerm)

    if(loading) {
        return (
            <div className="loader"><BeatLoader loading={loading} size = {24} color={'lime'}/></div>
        )
    }
    if(error){
        return (
            <>
            <div className="search-bar">
                <form className="search-form" onSubmit = {handleSubmit}>
                    <input type="text" id="search-input" value={searchInput} onChange = {e => setSearchInput(e.target.value)} placeholder="Search for images..."/>
                    <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <p className="errors"><span style={{fontSize:'25px'}}>Oops!</span>{' '}{error}...</p>
            </>

        )
    }
    return (
        <>
        <div className="search-bar">
            <form className="search-form" onSubmit = {handleSubmit}>
                <input type="text" id="search-input" value={searchInput} onChange = {e => setSearchInput(e.target.value)} placeholder="Search for images..."/>
                <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>
            </form>
        </div>


        <div className="image-gallery">
            {
                images.map(image => <ImageCards key={image.id} url={image.webformatURL} height={image.webformatHeight} comments={image.comments} downloads={image.downloads} favorites={image.favorites} likes={image.likes} pageURL={image.pageURL} tags={image.tags} userImageURL = {image.userImageURL} user={image.user} views ={image.views} tagSearch = {tagSearch}/>)
            }
        </div>
        </>
    )
}

export default Gallery
