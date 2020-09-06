import React, { Component } from 'react'
import defaultBcg from '../images/Venue2.jpg'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {CatererContext} from '../contextct'
import StyledHero from "../components/StyledHero"
import Title from '../components/Title'
export default class Halls extends Component {
  constructor(props){
    super(props);
    this.state={
      Hall: this.props.match.params.Hall, defaultBcg: defaultBcg
    };
  }

  static contextType=CatererContext;
  // componentDidMount()


  render() {
    const { getCaterer }=this.context;
    const caterer = getCaterer(this.state.name);

    if(!caterer){
      return( <div className='error'>
     <h3> No such Caterers Available...</h3>
         <Link to='/Caterers' className='btn-primary'>
         Back to Caterers
         </Link>
       </div>
      );
   }
    const {name,
      description,
      capacity,
      location,
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
        <Banner title={`${name} Caterers`}>
          <Link to="/Caterers" className='btn-primary'>
            Back to Caterers
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
              <h6>price : Rs{price}</h6>
              <h6>location : {location} </h6>

              <h6>max capacity : {capacity} people
              </h6>
              <h6>discounts: {discount}%</h6>
             
            </article>
          </div>
        </section>
        <section className="venue-extras">
          <h6>Veg Menu </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        <section className="venue-extras">
          <h6>Non Veg Menu (Chicken/Muttun) </h6>
          <ul className="extras">
            {events.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        <section className="venue-extras">
          <h6>Non Veg Menu (Seafood) </h6>
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
