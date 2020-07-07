
import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import VenueContainer from '../components/VenueContainer'

export default function Venue() {
  return(
    <>
    <Hero hero="VenueHero">
   <Banner title="Available Halls">
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </Banner>
    </Hero> 
    <VenueContainer/>
    </>
  );
};
