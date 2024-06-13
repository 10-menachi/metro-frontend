import React from "react";
import VehicleTableRow from "./VehicleTableRow";

const VehicleTable = ({ vehicles }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Make
            </th>
            <th scope="col" className="px-6 py-3">
              Model
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Plate Number
            </th>
            <th scope="col" className="px-6 py-3">
              Seats
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => {
            const { id } = vehicle;
            return <VehicleTableRow key={id} vehicle={vehicle} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
