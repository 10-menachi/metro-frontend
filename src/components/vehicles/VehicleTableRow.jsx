import React from "react";

const VehicleTableRow = ({ vehicle, handleOpen }) => {
  const { model, make, year, plate_number, seats } = vehicle;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {make}
      </th>
      <td className="px-6 py-4">{model}</td>
      <td className="px-6 py-4">{year}</td>
      <td className="px-6 py-4">{plate_number}</td>
      <td className="px-6 py-4">{seats}</td>
      <td>
        <div className="flex items-center space-x-4">
          <button
            className="text-blue-600 hover:text-blue-900"
            type="button"
            onClick={() => handleOpen(vehicle)}
          >
            <i
              className="fas fa-eye text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 cursor-pointer"
              data-toggle="tooltip"
              title="View"
            ></i>
          </button>
          <button className="text-indigo-600 hover:text-indigo-900">
            <i
              className="fas fa-pencil-alt text-white bg-indigo-600 p-2 rounded-full hover:bg-indigo-900 cursor-pointer"
              data-toggle="tooltip"
              title="Edit"
            ></i>
          </button>
          <button className="text-red-600 hover:text-red-900">
            <i
              className="fas fa-trash text-white bg-red-600 p-2 rounded-full hover:bg-red-900 cursor-pointer"
              data-toggle="tooltip"
              title="Delete"
            ></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VehicleTableRow;
