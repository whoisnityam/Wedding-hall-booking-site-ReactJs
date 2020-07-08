import React from "react";
import { useContext } from "react";
import { VenueContext } from "../context";
// import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const VenueFilter = ({ Venue }) => {
  // react hooks
  const context = useContext(VenueContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    events,
    food
  } = context;

  // get unique types
  let types = getUnique(Venue, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(Venue, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      {/* <Title title="Filter By:" /> */}
      <h5>Filter By:</h5>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Hall type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value= {type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        {/* <div className="form-group"> */}
          {/* <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div> */}
        {/* end of select type */}
        {/* extras */}
         <div className="form-group">
         <label htmlFor="food">Food:</label>
          <div className="single-extra">
            <input
              type="checkbox"
              name="food"
              id="food"
              checked={food}
              onChange={handleChange}
            />
            <label htmlFor="food">Veg</label><br></br>
            <input
              type="checkbox"
              name="food"
              id="food"
              checked={food}
              onChange={handleChange}
            />
            <label htmlFor="food">Non veg/Veg</label>
          </div>
          </div>
          <div className="form-group">
         <label htmlFor="events">Events:</label>
          <div className="single-extra">
            <input
              type="checkbox"
              name="events"
              id="events"
              checked={events}
              onChange={handleChange}
            />
            <label htmlFor="events">Wedding</label><br></br>
            <input
              type="checkbox"
              name="events"
              id="events"
              checked={events}
              onChange={handleChange}
            />
            <label htmlFor="events">Birthday</label><br/>
            <input
              type="checkbox"
              name="events"
              id="events"
              checked={events}
              onChange={handleChange}
            />
            <label htmlFor="events">Thread Cermony</label><br/>
            <input
              type="checkbox"
              name="events"
              id="events"
              checked={events}
              onChange={handleChange}
            />
            <label htmlFor="events">Anniversary</label><br/>
            <input
              type="checkbox"
              name="events"
              id="events"
              checked={events}
              onChange={handleChange}
            />
            <label htmlFor="events">Office Conferences</label><br/>
            <input
              type="checkbox"
              name="events"
              id="events"
              checked={events}
              onChange={handleChange}
            />
            <label htmlFor="events">Others</label><br/>
          </div>
          </div>
          {/*<div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div> */}
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default VenueFilter;