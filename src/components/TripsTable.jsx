import React from "react";

const TripsTable = () => {
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 ">
              Faith Mupe
            </th>
            <td className="px-6 py-4">MJK1872</td>
            <td className="px-6 py-4">Tudor/Ferry-Route</td>
            <td className="px-6 py-4">12:00 - 21:00</td>
            <td className="px-6 py-4">6/2/2024</td>
            <td className="px-6 py-4">0725428102</td>
            <td className="px-6 py-4">Makupa, Juakali</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TripsTable;
