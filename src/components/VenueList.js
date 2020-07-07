import React from "react";
import Venue1 from "./Venue1";
export default function VenueList({Venue}){
  if (Venue.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no Venue matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="Venuelist">
      <div className="Venuelist-center">
        {Venue.map(item => {
          return <Venue1 key={item.id} venue={item} />;
        })}
      </div>
    </section>
  );
};
