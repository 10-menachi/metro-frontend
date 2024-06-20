import React, { useState } from "react";
import DriverTableRow from "../driverdetails/DriverTableRow";
import ViewDriverDetails from "../driverdetails/ViewDriverDetails";

const DriverTable = ({ drivers }) => {
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [renewFormData, setRenewFormData] = useState({
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    setRenewFormData({
      ...renewFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDetailsModalOpen = (driver) => {
    setDetailsModalOpen(true);
    setSelectedDriver(driver);
  };

  const handleDetailsModalClose = () => {
    setDetailsModalOpen(false);
    setSelectedDriver(null);
  };
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => {
            return (
              <DriverTableRow
                handleDetailsModalOpen={handleDetailsModalOpen}
                key={driver.id}
                driver={driver}
              />
            );
          })}
        </tbody>
      </table>
      {isDetailsModalOpen && (
        <ViewDriverDetails
          isOpen={isDetailsModalOpen}
          handleClose={handleDetailsModalClose}
          driver={selectedDriver}
          renewFormData={renewFormData}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default DriverTable;
