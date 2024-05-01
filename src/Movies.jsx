import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { imageUrl } from './Url';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Samplecontext } from './App';

const Movies = ({ nam }) => {
  const { setimage, sethead, setdetails, setvote, setrate, setnav, setdate, movie, setmovie, search, setsearchbar } =
    useContext(Samplecontext);

  const get = (index) => {
    setimage(imageUrl + index.backdrop_path);
    sethead(index.title || index.name);
    setdetails(index.overview);
    setdate(index.release_date || index.first_air_date);
    setvote(index.vote_count);
    setrate(index.vote_average.toFixed(0));
  }

  useEffect(() => {
    axios.get(nam).then((arg) => setmovie(arg.data.results));
  }, [movie, nam, setmovie]);
  useEffect(() => {
    setnav(true)
    setsearchbar(true)
  });
  const change = () => {
    setnav(false);
  }
  const filtermovie = movie.filter((arg) => (arg.title || arg.name).toLowerCase().includes(search))

  return (
    <div className='body'>
      {
        (search === "" ? movie : filtermovie).map((index) => {
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

