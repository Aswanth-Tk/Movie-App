import React, { useContext } from 'react'
import { Samplecontext } from './App';
import { FaStar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const Detailpage = () => {
  const { image, head, details, vote, rate, date } = useContext(Samplecontext)
  return (
    <div className='maintext'
      style={{ backgroundImage: `url(${image})` }}>
      <h1 >{head}</h1>
      <div className='d-flex text2'>
        <p > <FaStar className='icon' /> {rate}/10 <TbPointFilled /> {vote} Reviews  <TbPointFilled /> {date.slice(0, 4)} </p>
      </div>
      <p className='detail'>{details}</p>
    </div>
  )
}
export default Detailpage
