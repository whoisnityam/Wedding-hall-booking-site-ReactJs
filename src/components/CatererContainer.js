import React from "react";
import { withCatererConsumer } from "../contextct";
 import Loading from "./Loading";
import CatererFilter from "./CatererFilter";
import CatererList from "./CatererList";

function CatererContainer({ contextct }) {
 const {loading, sortedCaterer, Caterer } = contextct;
   if (loading) {
     return <Loading />;
   }
  return (
    <>
      <CatererFilter Caterer={Caterer} />
      <CatererList Caterer={sortedCaterer} />
    </>
  );
}

export default withCatererConsumer(CatererContainer);