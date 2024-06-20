import React, { Fragment, useContext, useState } from "react";
import DriverAvatar from "./DriverAvatar";
import { Transition } from "@headlessui/react";
import RenewLicense from "./RenewLicense";
import {
  activateDriver,
  deactivateDriver,
  renewDriversLicense,
} from "../../../utils/driverUtils";
import { DriverContext } from "../../../context/DriverContext";

const ViewDriverDetails = ({ isOpen, handleClose, driver }) => {
  const [driverData, setDriverData] = useState(driver);
  const { updateDriver } = useContext(DriverContext);
  const { name, address } = driver.user;
  const {
    driving_license_date_issued,
    driving_license_no,
    driving_license_date_expiry,
    national_id_no,
    status,
  } = driverData;
  const [showRenewModal, setShowRenewModal] = useState(false);
  const [renewFormData, setRenewFormData] = useState({
    startDate: "",
    endDate: "",
  });

  const buttonText = status === "active" ? "Deactivate" : "Activate";
  const buttonColor = status === "active" ? "bg-red-500" : "bg-green-500";

  const changeDriverStatus = async (status) => {
    if (status === "active") {
      const response = await deactivateDriver(driver.id);
      const updatedDriver = response.driver;
      setDriverData(updatedDriver);
      updateDriver(driver.id, updatedDriver);
    } else {
      const response = await activateDriver(driver.id);
      const updatedDriver = response.driver;
      setDriverData(updatedDriver);
      updateDriver(driver.id, updatedDriver);
    }
  };

  const handleRenewButtonClick = () => {
    setShowRenewModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRenewFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRenewFormSubmit = async (e) => {
    e.preventDefault();
    const response = await renewDriversLicense(driver.id, renewFormData);
    const updatedDriver = response.driver;
    setDriverData(updatedDriver);
    updateDriver(driver.id, updatedDriver);
    setShowRenewModal(false);
  };

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-400"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 overflow-y-auto z-50">
        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-400"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                  <span
                    onClick={handleClose}
                    className="close absolute top-4 right-4 cursor-pointer"
                  >
                    <i className="fas fa-times text-white text-2xl"></i>
                  </span>
                  <DriverAvatar status={status} />
                  <p className="text-md text-white text-xl font-bold">
                    {name || "-"}
                  </p>
                  <p className="text-md text-white text-lg font-semibold"></p>
                  <p className="text-md text-white text-lg font-semibold flex gap-4 justify-center items-center">
                    <span>
                      <i className="fa-solid fa-id-card text-gray-400"></i>{" "}
                      {national_id_no || "-"}
                    </span>
                    <span>
                      <i className="fa-solid fa-address-book text-gray-400"></i>{" "}
                      {address || "-"}
                    </span>
                    <span>
                      <i className="fa-solid fa-car text-gray-400"></i>{" "}
                      {driver.vehicle?.plate_number || "-"}
                    </span>
                  </p>
                  <div className="relative border-l mt-4 border-gray-200 dark:border-gray-600 ml-3.5 mb-4 md:mb-5">
                    <div className="mb-10 ml-8">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-700 dark:bg-gray-600">
                        <i className="fa-regular fa-calendar"></i>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        <span>
                          <i className="fa-solid fa-address-card text-gray-400 text-xl"></i>{" "}
                          {driving_license_no}
                        </span>
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Issue Date:{" "}
                        {new Date(
                          driving_license_date_issued
                        ).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <time
                        className={`block mb-2 text-sm font-normal leading-none ${
                          new Date(driving_license_date_expiry) <
                          new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                            ? "text-red-500"
                            : new Date(driving_license_date_expiry) <
                              new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}
                      >
                        Expiry Date:{" "}
                        {new Date(
                          driving_license_date_expiry
                        ).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {new Date(driving_license_date_expiry) <
                          new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) && (
                          <button
                            className="ml-2 bg-red-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded"
                            onClick={handleRenewButtonClick}
                          >
                            Renew
                          </button>
                        )}
                      </time>

                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        The driver should renew the license before it expires.
                      </p>
                    </div>
                    {showRenewModal && (
                      <RenewLicense
                        setShowRenewModal={setShowRenewModal}
                        handleRenewFormSubmit={handleRenewFormSubmit}
                        renewFormData={renewFormData}
                        handleInputChange={handleInputChange}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${buttonColor} text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm`}
                  onClick={() => changeDriverStatus(status)}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
};

export default ViewDriverDetails;
