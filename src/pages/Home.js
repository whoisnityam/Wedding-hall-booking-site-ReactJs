import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Services from "../components/Services"
import FeaturedVenue from '../components/FeaturedVenue'
export default function Home() {
  return(
    <>
  <Hero>
    <Banner title="Book For Your Ideal Event" subtitle="The Common Mans Shop">
      <Link to="/Venues" className="btn-primary">
        SHOW ALL
      </Link>
    </Banner>
  </Hero>
  <Services/>
  <FeaturedVenue/>
  </>);
}





