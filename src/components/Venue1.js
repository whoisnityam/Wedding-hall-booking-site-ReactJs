import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/Venue2.jpg'
import PropTypes from 'prop-types';

export default function Venue1({venue}) {
  const{name,Hall,images,price}=venue;
  return (
    <article className='venue'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt="Featured Venue"/>
        <div className='price-top'>
          <h6>Rs{price}</h6>
          <p>per day</p>
        </div>
        <Link to={`/Venues/${Hall}`} className="btn-primary venue-link">Features</Link>
      </div>
      <p className="venue-info">{name}</p>
    </article>
  );
}

Venue1.propTypes={
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    Hall: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })

}