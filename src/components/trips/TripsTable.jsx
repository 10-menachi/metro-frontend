import React from "react";
import TripTableRow from "./TripTableRow";

const TripsTable = ({ trips, customers, routes }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Organisation ID
            </th>
            <th scope="col" className="px-6 py-3">
              Preferred Route
            </th>
            <th scope="col" className="px-6 py-3">
              Shift
            </th>
            <th scope="col" className="px-6 py-3">
              Pickup Date
            </th>
            <th scope="col" className="px-6 py-3">
              Phone No
            </th>
            <th scope="col" className="px-6 py-3">
              Home Address
            </th>
          </tr>
        </thead>
        <tbody>
          {trips.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="px-6 py-3 text-center text-gray-500 dark:text-gray-400"
              >
                No trips found
              </td>
            </tr>
          ) : (
            trips.map((trip) => {
              const route = routes.find(
                (route) => route.id === trip.preferred_route_id
              );
              const customer = customers.find(
                (customer) => customer.id === trip.customer_id
              );
              const { user } = customer;
              user.org_code = customer.customer_organisation_code;
              return (
                <TripTableRow
                  key={trip.id}
                  trip={trip}
                  customer={user}
                  route={route}
                />
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TripsTable;
