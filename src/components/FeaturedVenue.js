import React, { Component } from 'react'
import {VenueContext} from '../context'
import Loading from "./Loading"
import Venue1 from './Venue1'
import Title from './Title'
export default class featuredVenue extends Component {
  static contextType=VenueContext;
  render() {
    let {loading, featuredVenue: Venue} =this.context;
    Venue = Venue.map(venue => {
      return <Venue1 key={venue.id} venue={venue}/>;
    });
  

    return (
      <section className="featured-Venue">
        <Title title="featured Venues"/>
        <div className= 'featured-Venue-center'>
          {loading?<Loading/>: Venue}
        </div>
      </section>
    )
  }
}
