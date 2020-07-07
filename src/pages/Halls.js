import React, { Component } from 'react'
import defaultBcg from '../images/Venue2.jpg'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {VenueContext} from '../context'
import StyledHero from '../components/StyledHero'
export default class Halls extends Component {
  constructor(props){
    super(props);
    this.state={
      Hall: this.props.match.params.Hall, defaultBcg: defaultBcg
    };
  }

  static contextType=VenueContext;
  // componentDidMount()


  render() {
    const { getVenue }=this.context;
     const venue = getVenue(this.state.Hall);
   // const venue=this.props.match.params.Hall;

    if(!venue){
      return( <div className='error'>
     <h3> No such Venue Available...</h3>
         <Link to='/Venues' className='btn-primary'>
         Back to Venue
         </Link>
       </div>
      );
   }
    const {name,
      description,
      capacity,
      type,
      price,
      extras,
      events,
      food,
      discount,
      images}=venue;
      const [mainImg,...defaultImg]=images;
    return (
      <>
      <StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title={`${name} venue`}>
          <Link to="/Venues" className='btn-primary'>
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-venue">
          <div className="single-venue-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-venue-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>type : {type} SQFT</h6>
              <h6>max capacity : {capacity} people
              </h6>
              <h6>discounts: {discount}%</h6>
             
            </article>
          </div>
        </section>
        <section className="venue-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        <section className="venue-extras">
          <h6>Events </h6>
          <ul className="extras">
            {events.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        <section className="venue-extras">
          <h6>Foods </h6>
          <ul className="extras">
            {food.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    )
 }
 }
