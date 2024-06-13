import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import TripContent from "../../components/trips/TripContent";
import { useTrips } from "../../context/TripsContext";
import Loading from "../../components/Loading";

const ScheduledTrips = ({ user, authenticated }) => {
  const { trips, customers, routes } = useTrips();

  if (!authenticated || !trips.length || !customers.length || !routes.length) {
    return <Loading />;
  }

  const scheduledTrips = trips.filter((trip) => {
    const tripDate = new Date(trip.drop_off_or_pick_up_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return tripDate > today;
  });

  const { permitted_to } = user;

  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <TripContent
        trips={scheduledTrips}
        customers={customers}
        routes={routes}
        sch_page={true}
      />
    </div>
  );
};

export default ScheduledTrips;
