import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'

export default function Caterers() {
  return<Hero hero="CatererHero">
     <Banner title="Available Caterers">
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </Banner>
    </Hero>;
};