import React, { useEffect, useState } from 'react';
import './card.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:3000/p/16';


function Card({id,primaryimg, name, price, description,addedToCart}) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [inCart, setInCart] = useState(addedToCart);

  async function postToAPI (){
    const response = await Axios.post(`http://localhost:3000/cart/a/${id}`,{}, { withCredentials: true })
    const response2 = await Axios.get(`http://localhost:3000/cart`, { withCredentials: true })
    console.log(response2.data)
  }

  const toCart = async () => {
    setInCart(prevState => {
      if (!prevState) {
        console.log('added to cart',!prevState);
        postToAPI()
      } else {
        console.log('removed from cart',!prevState);
        postToAPI()
      }
      return !prevState;
    });
  };
  const toggleFavourite = () => {
    console.log('Button clicked');
    setIsFavourite(prevState => {
      console.log('Previous state:', prevState);
      return !prevState;
    });
  };


  return (
    <div className='card' style={{ backgroundImage: `url(../${id}.avif)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
      <Link to={`/p/${id}`} >
      <img src= {`/${primaryimg}`} alt={description} />
      </Link>
      <div className='information'>
      <Link to={`/p/${id}`} className={''}>

      </Link>
      </div>
      <button className='addtofavouritebtn' onClick={toCart}>{inCart?<FaHeart />:<FaRegHeart/>}</button>
    </div>
  );
}

export default Card;