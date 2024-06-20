import React, { Fragment, useEffect, useState } from "react";
import TripTableRow from "./TripTableRow";
import { getVehicles } from "../../utils/vehicleUtils";

const SchTrips = ({ trips, routes, customers }) => {
  const [vehicles, setVehicles] = useState([]);
  const [tripsByRoute, setTripsByRoute] = useState({});

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await getVehicles();
      setVehicles(response.vehicles);
    };
    fetchVehicles();
  }, []);

  // Group trips by route ID
  useEffect(() => {
    const groupedTrips = trips.reduce((acc, trip) => {
      const routeId = trip.preferred_route_id;
      if (!acc[routeId]) {
        acc[routeId] = [];
      }
      acc[routeId].push(trip);
      return acc;
    }, {});
    setTripsByRoute(groupedTrips);
  }, [trips]);

  const calculateEligibleVehicles = (customersCount) => {
    const eligibleVehicles = vehicles.filter((vehicle) => {
      if (customersCount <= 4) {
        return vehicle.seats <= 4;
      } else if (customersCount > 4 && customersCount <= 7) {
        return vehicle.seats > 4 && vehicle.seats <= 8;
      } else if (customersCount <= 15) {
        return vehicle.seats > 7 && vehicle.seats <= 16;
      }
      return false; // To handle any other cases that are not covered above
    });
    return eligibleVehicles;
  };

  return (
    <div className="relative overflow-x-auto">
      {Object.keys(tripsByRoute).length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No trips found
        </p>
      ) : (
        <>
          {Object.keys(tripsByRoute).map((routeId, index) => {
            const route = routes.find((r) => r.id === parseInt(routeId));
            if (!route) return null;

            const tripsForRoute = tripsByRoute[routeId];
            tripsForRoute.sort((a, b) => {
              const dateA = new Date(a.drop_off_or_pick_up_date);
              const dateB = new Date(b.drop_off_or_pick_up_date);
              return dateA - dateB;
            });

            // Group trips by date within each route
            const tripsByDate = tripsForRoute.reduce((acc, trip) => {
              const tripDate = new Date(trip.drop_off_or_pick_up_date)
                .toISOString()
                .split("T")[0];
              if (!acc[tripDate]) {
                acc[tripDate] = [];
              }
              acc[tripDate].push(trip);
              return acc;
            }, {});

            return (
              <div key={routeId} className={index > 0 ? "mt-8" : ""}>
                <h2 className="text-lg font-semibold mb-4">{route.name}</h2>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        colSpan="7"
                        className="px-6 py-3 text-white text-center"
                      >
                        {route.location}
                      </th>
                    </tr>
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3">
                        From
                      </th>
                      <th scope="col" className="px-6 py-3">
                        To
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pickup Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pickup Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Shift
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Eligible Vehicles
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(tripsByDate).map((date, idx) => {
                      const tripsByPickUpLocation = tripsByDate[date].reduce(
                        (acc, trip) => {
                          const pickUpLocation =
                            trip.pick_up_location || "Unknown";
                          if (!acc[pickUpLocation]) {
                            acc[pickUpLocation] = [];
                          }
                          acc[pickUpLocation].push(trip);
                          return acc;
                        },
                        {}
                      );

                      return (
                        <Fragment key={idx}>
                          <tr>
                            <th colSpan="7" className="bg-gray-200 py-2">
                              {new Date(date).toLocaleDateString()}
                            </th>
                          </tr>
                          {Object.keys(tripsByPickUpLocation).map(
                            (pickUpLocation, idx) => (
                              <Fragment key={idx}>
                                <tr>
                                  <th colSpan="7" className="bg-gray-100 py-2">
                                    From {pickUpLocation}
                                  </th>
                                </tr>
                                {tripsByPickUpLocation[pickUpLocation].map(
                                  (trip) => {
                                    const customer = customers.find(
                                      (customer) =>
                                        customer.id === trip.customer_id
                                    );
                                    if (!customer) return null;

                                    const { user } = customer;
                                    user.org_code =
                                      customer.customer_organisation_code;

                                    // Calculate eligible vehicles based on customers count
                                    const eligibleVehicles =
                                      calculateEligibleVehicles(
                                        tripsByDate[date].length
                                      );

                                    return (
                                      <TripTableRow
                                        key={trip.id}
                                        trip={trip}
                                        customer={user}
                                        route={route}
                                        sch_page={true}
                                        eligibleVehicles={eligibleVehicles}
                                      />
                                    );
                                  }
                                )}
                              </Fragment>
                            )
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SchTrips;
