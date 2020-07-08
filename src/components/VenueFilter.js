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
    wedding,
    birthday,
    threadceremony,
    anniversary,
    others,
    officeconferences,
    veg,
    nveg,
    anveg
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
          <label htmlFor="price">room price Rs: {price}</label>
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
              name="veg"
              id="veg"
              checked={veg}
              onChange={handleChange}
            />
            <label htmlFor="veg">Veg</label><br></br>
            <input
              type="checkbox"
              name="nveg"
              id="nveg"
              checked={nveg}
              onChange={handleChange}
            />
            <label htmlFor="nveg">Non veg/Veg</label><br/>
            <input
              type="checkbox"
              name="anveg"
              id="anveg"
              checked={anveg}
              onChange={handleChange}
            />
            <label htmlFor="anveg">Alcohol+Non Veg</label>
          </div>
          </div>
          <div className="form-group">
         <label htmlFor="events">Events:</label>
          <div className="single-extra">
            <input
              type="checkbox"
              name="wedding"
              id="wedding"
              checked={wedding}
              onChange={handleChange}
            />
            <label htmlFor="wedding">Wedding</label><br></br>
            <input
              type="checkbox"
              name="birthday"
              id="birthday"
              checked={birthday}
              onChange={handleChange}
            />
            <label htmlFor="birthday">Birthday</label><br/>
            <input
              type="checkbox"
              name="threadceremony"
              id="threadceremony"
              checked={threadceremony}
              onChange={handleChange}
            />
            <label htmlFor="threadceremony">Thread Cermony</label><br/>
            <input
              type="checkbox"
              name="anniversary"
              id="anniversary"
              checked={anniversary}
              onChange={handleChange}
            />
            <label htmlFor="anniversary">Anniversary</label><br/>
            <input
              type="checkbox"
              name="officeconferences"
              id="officeconferences"
              checked={officeconferences}
              onChange={handleChange}
            />
            <label htmlFor="officeconferences">Office Conferences</label><br/>
            <input
              type="checkbox"
              name="others"
              id="others"
              checked={others}
              onChange={handleChange}
            />
            <label htmlFor="others">Others</label><br/>
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