import React from "react";

const TripTableRow = ({ trip, customer, route }) => {
  const { name, org_code, phone, address } = customer;
  const { location } = route;
  const { pick_up_time, drop_off_or_pick_up_date } = trip;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 ">
        {name || "-"}
      </th>
      <td className="px-6 py-4">{org_code || "-"}</td>
      <td className="px-6 py-4">{location || "-"}</td>
      <td className="px-6 py-4">{pick_up_time || "-"}</td>
      <td className="px-6 py-4">{drop_off_or_pick_up_date || "-"}</td>
      <td className="px-6 py-4">{phone || "-"}</td>
      <td className="px-6 py-4">{address || "-"}</td>
    </tr>
  );
};

export default TripTableRow;
