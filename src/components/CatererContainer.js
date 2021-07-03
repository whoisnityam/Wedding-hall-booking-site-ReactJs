import React from "react";
import { withCatererConsumer } from "../contextct";
import Loading from "./Loading";
import CatererFilter from "./CatererFilter";
import CatererList from "./CatererList";

function CatererContainer({ contextct }) {
 const {loading, sortedCaterer, caterer } = contextct;
   if (loading) {
     return <Loading />;
   }
  return (
    <>
      <CatererFilter caterer={caterer} />
      <CatererList caterer={sortedCaterer} />
    </>
  );
}

export default withCatererConsumer(CatererContainer);