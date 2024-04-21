import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { imageUrl } from './Url';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Samplecontext } from './App';

const Movies = ({ nam }) => {
  const { setimage, sethead, setdetails, setvote, setrate, setnav, setdate } = useContext(Samplecontext);
  const get = (index) => {
    console.log(index);
    setimage(imageUrl + index.backdrop_path);
    sethead(index.title || index.name);
    setdetails(index.overview);
    setdate(index.release_date || index.first_air_date);
    setvote(index.vote_count);
    setrate(index.vote_average.toFixed(0));
  }
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    axios.get(nam).then((arg) => setmovie(arg.data.results));
  },);
  useEffect(() => {
    setnav(true)
  },);
  const change = () => {
    setnav(false);
  }
  return (
    <div className='body'>
      {
        movie.map((index) => {
          return (
            <div key={index.id} >
              <Link to={"/detail"} onClick={change} >
                <Card className='card1' onClick={() => get(index)} >
                  <Card.Img className='card2' variant="top" src={imageUrl + index.poster_path} />
                </Card>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
export default Movies

