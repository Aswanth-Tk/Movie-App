import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { comedyMovies, imageUrl } from './Url';

const Banner = () => {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        axios.get(comedyMovies)
            .then((response) => {
                const movies = response.data.results;
                const randomIndex = Math.floor(Math.random() * movies.length);
                setmovie(movies[randomIndex]);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    return (
        <div className='banner'
            style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }}>
            <h1 >{movie.name}</h1>
        </div>
    )
}

export default Banner