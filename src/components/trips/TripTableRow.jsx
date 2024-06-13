import React from "react";
import { Link } from "react-router-dom";

const TripTableRow = ({
  trip,
  customer,
  route,
  sch_page,
  eligibleVehicles,
}) => {
  const { name, org_code, phone, address } = customer;
  const { location } = route;
  const {
    pick_up_location,
    drop_off_location,
    pick_up_time,
    drop_off_or_pick_up_date,
  } = trip;

  const adjustPickupTime = (pickupTime, isHomePickup, isOfficePickup) => {
    const [startTime, endTime] = pickupTime.split(" - ");
    let newStartTime = new Date(`1970-01-01T${startTime}:00`);
    let newEndTime = new Date(`1970-01-01T${endTime}:00`);

    if (isHomePickup) {
      newStartTime.setHours(newStartTime.getHours() - 1);
    } else if (isOfficePickup) {
      newEndTime.setHours(newEndTime.getHours() + 1);
    }

    const formattedStartTime = newStartTime
      .toTimeString()
      .split(" ")[0]
      .slice(0, 5);
    return formattedStartTime;
  };

  const isHomePickup = pick_up_location.toLowerCase().includes("home");
  const isOfficePickup = pick_up_location.toLowerCase().includes("office");
  const adjustedPickUpTime = adjustPickupTime(
    pick_up_time,
    isHomePickup,
    isOfficePickup
  );

  if (sch_page) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">{name || "-"}</td>
        <td className="px-6 py-4">{pick_up_location || "-"}</td>
        <td className="px-6 py-4">{drop_off_location || "-"}</td>
        <td className="px-6 py-4">{drop_off_or_pick_up_date || "-"}</td>
        <td className="px-6 py-4">{adjustedPickUpTime || "-"}</td>
        <td className="px-6 py-4">{pick_up_time || "-"}</td>
        <td className="px-6 py-4">
          {eligibleVehicles.map((vehicle) => (
            <Link to="#" key={vehicle.id}>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {vehicle.make}{" "}
                <span className="text-yellow-600">Seats: {vehicle.seats}</span>
              </span>
            </Link>
          ))}
        </td>
      </tr>
    );
  }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4">
        {name || "-"}
      </th>
      <td className="px-6 py-4">{org_code || "-"}</td>
      <td className="px-6 py-4">{location || "-"}</td>
      <td className="px-6 py-4">{adjustedPickUpTime || "-"}</td>
      <td className="px-6 py-4">{drop_off_or_pick_up_date || "-"}</td>
      <td className="px-6 py-4">{phone || "-"}</td>
      <td className="px-6 py-4">{address || "-"}</td>
    </tr>
  );
};

export default TripTableRow;
