import React from "react";
import { useContext } from "react";
import { CatererContext } from "../contextct"; //to be changed
// import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const CatererFilter = ({ Caterer }) => {
  // react hooks
  const context = useContext(CatererContext);
  const {
    handleChange,
    price,
    minPrice,
    maxPrice,
    alc,
    nalc,
    veg,
    nveg,
    snveg
  } = context;

  // get unique location
  return (
    <section className="filter-container">
      {/* <Title title="Filter By:" /> */}
      <h5>Filter By:</h5>
      <form className="filter-form">
        {/* select type */}
      
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Catering price Rs: {price}</label>
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
            <label htmlFor="nveg">Meat</label><br/>
            <input
              type="checkbox"
              name="snveg"
              id="snveg"
              checked={snveg}
              onChange={handleChange}
            />
            <label htmlFor="snveg">Seafood</label>
          </div>
          </div>
          <div className="form-group">
         <label htmlFor="events">Beverages</label>
          <div className="single-extra">
            <input
              type="checkbox"
              name="alc"
              id="alc"
              checked={alc}
              onChange={handleChange}
            />
            <label htmlFor="alc">Alcoholic</label><br></br>
            <input
              type="checkbox"
              name="nalc"
              id="nalc"
              checked={nalc}
              onChange={handleChange}
            />
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

export default CatererFilter;