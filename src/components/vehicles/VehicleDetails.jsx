import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import VehicleAvatar from "./VehicleAvatar";
import RenewInsurance from "./RenewInsurance";

const VehicleDetails = ({ vehicle, isOpen, handleClose }) => {
  const {
    model,
    make,
    year,
    plate_number,
    seats,
    fuel_type,
    color,
    status,
    driver,
    vehicle_insurance_issue_date,
    vehicle_insurance_issue_organisation,
    vehicle_insurance_expiry,
  } = vehicle;

  const buttonText = status === "active" ? "Deactivate" : "Activate";
  const buttonColor = status === "active" ? "bg-red-500" : "bg-green-500";

  const changeVehicleStatus = async (status) => {
    if (!vehicle) return;
    if (status === "active") {
      console.log("Deactivating vehicle...", status);
    } else {
      console.log("Activating vehicle...", status);
    }
  };

  const [showRenewModal, setShowRenewModal] = useState(false);
  const [renewFormData, setRenewFormData] = useState({
    organisation: "",
    startDate: "",
    endDate: "",
  });

  const handleRenewButtonClick = () => {
    setShowRenewModal(true);
  };

  const handleRenewFormSubmit = (e) => {
    e.preventDefault();
    console.log("Renew Insurance Form Submitted:", renewFormData);
    setShowRenewModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRenewFormData({
      ...renewFormData,
      [name]: value,
    });
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
                  <VehicleAvatar status={status} />
                  <p className="text-md text-white text-xl font-bold">
                    {make} {model}, {year}, {color}
                  </p>

                  <p className="text-md text-white text-lg font-semibold">
                    {plate_number}
                  </p>

                  <p className="text-md text-white text-lg font-semibold flex gap-4 justify-center items-center">
                    <span>
                      <i className="fa-solid fa-chair text-gray-400"></i>{" "}
                      {seats}
                    </span>
                    <span>
                      <i className="fa-solid fa-gas-pump text-gray-400"></i>{" "}
                      {fuel_type}
                    </span>
                    <span>
                      <i className="fa-solid fa-user-tie text-gray-400 text-xl"></i>{" "}
                      {driver ? driver.name : "No driver"}
                    </span>
                  </p>
                  {vehicle_insurance_issue_date ? (
                    <div className="relative border-l mt-4 border-gray-200 dark:border-gray-600 ml-3.5 mb-4 md:mb-5">
                      <div className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-700 dark:bg-gray-600">
                          <svg
                            className="w-2.5 h-2.5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
                            />
                          </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                          <span>
                            <i className="fa-solid fa-shield text-gray-400 text-xl"></i>{" "}
                            {vehicle_insurance_issue_organisation}
                          </span>
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          Issue Date:{" "}
                          {new Date(
                            vehicle_insurance_issue_date
                          ).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <time
                          className={`block mb-2 text-sm font-normal leading-none ${
                            new Date(vehicle_insurance_expiry) <
                            new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                              ? "text-red-500"
                              : new Date(vehicle_insurance_expiry) <
                                new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
                              ? "text-yellow-500"
                              : "text-green-500"
                          }`}
                        >
                          Expiry Date:{" "}
                          {new Date(
                            vehicle_insurance_expiry
                          ).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                          {new Date(vehicle_insurance_expiry) <
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
                          This insurance covers the vehicle against accidents
                          and theft.
                        </p>
                      </div>
                      {showRenewModal && (
                        <RenewInsurance
                          setShowRenewModal={setShowRenewModal}
                          handleRenewFormSubmit={handleRenewFormSubmit}
                          renewFormData={renewFormData}
                          handleInputChange={handleInputChange}
                        />
                      )}
                    </div>
                  ) : (
                    <>
                      <div
                        className="flex flex-col items-center justify-center gap-4 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        <span className="font-medium">
                          No insurance details found!
                        </span>{" "}
                        <button
                          onClick={handleRenewButtonClick}
                          className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                        >
                          Add Insurance
                        </button>
                      </div>
                      {showRenewModal && (
                        <RenewInsurance
                          setShowRenewModal={setShowRenewModal}
                          handleRenewFormSubmit={handleRenewFormSubmit}
                          renewFormData={renewFormData}
                          handleInputChange={handleInputChange}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${buttonColor} text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm`}
                  onClick={() => changeVehicleStatus(status)}
                >
                  {buttonText}
                </button>
                {!driver && (
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Assign Driver
                  </button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
};

export default VehicleDetails;
