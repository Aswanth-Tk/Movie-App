import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { comedyMovies, imageUrl } from './Url';
import { Samplecontext } from './App';

const Banner = () => {
    const {setsearchbar}=useContext(Samplecontext);
    const [movies, setmovies] = useState([]);
    useEffect(() => {
        setsearchbar(false)
        axios.get(comedyMovies)
            .then((response) => {
                const movieimages = response.data.results;
                const randomIndex = Math.floor(Math.random() * movieimages.length);
                setmovies(movieimages[randomIndex]);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    }, [setsearchbar]);

    return (
        <div className='banner'
            style={{ backgroundImage: `url(${imageUrl + movies.backdrop_path})` }}>
            <h1 >{movies.name}</h1>
        </div>
    )
}
export default Banner