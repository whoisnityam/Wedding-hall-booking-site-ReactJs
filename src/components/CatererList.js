import React from "react";
import Caterer1 from "./Caterer1";
export default function CatererList({Caterer}){
  if (Caterer.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no Caterer matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="Venuelist">
      <div className="Venuelist-center">
        {Caterer.map(item => {
          return <Caterer1 key={item.id} caterer={item} />;
        })}
      </div>
    </section>
  );
};