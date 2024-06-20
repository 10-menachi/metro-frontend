import React from "react";

const DriversToAssign = ({ drivers, onClose, handleAssignDriver }) => {
  const filteredDrivers = drivers.filter(
    (driver) =>
      !driver.vehicle &&
      driver.driving_license_no &&
      new Date(driver.driving_license_date_expiry) > new Date()
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end mb-4">
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {filteredDrivers.length === 0 ? (
        <p className="text-center text-gray-500">No Drivers Found</p>
      ) : (
        <table className="min-w-full bg-white border-gray-200 divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                License Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {filteredDrivers.map((driver) => (
              <tr key={driver.user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {driver.user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {driver.driving_license_no || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => handleAssignDriver(driver.id)}
                  >
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DriversToAssign;
