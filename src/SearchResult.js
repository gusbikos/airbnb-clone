import React from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import './SearchResult.css'

const SearchResult = ({ img, location, title, description, star, price, total }) => {


    return (
        <div className='searchResult'>
            <img ssrc={img} alt='' />
            <FavoriteBorderIcon className='searchResult-heart'/>
            
            <div className='searchResult-info'>

            </div>
        </div>
    )
}

export default SearchResult
