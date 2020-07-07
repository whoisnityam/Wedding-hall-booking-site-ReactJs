import React from "react";
import { withVenueConsumer } from "../context";
import Loading from "./Loading";
import VenueFilter from "./VenueFilter";
import VenueList from "./VenueList";

function VenueContainer({ context }) {
  const { loading, sortedVenue, Venue } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <VenueFilter Venue={Venue} />
      <VenueList Venue={sortedVenue} />
    </>
  );
}

export default withVenueConsumer(VenueContainer);