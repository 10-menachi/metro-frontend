import React, { Fragment, useState, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import VehicleAvatar from "./VehicleAvatar";
import RenewInsurance from "./RenewInsurance";
import { AppContext } from "../../../context/AppContext";
import DriversToAssign from "./DriversToAssign";
import {
  activateVehicle,
  assignDriverToVehicle,
  deactivateVehicle,
} from "../../../utils/vehicleUtils";
import { renewVehicleInsurance } from "../../../utils/common";

const VehicleDetails = ({ vehicle, isOpen, handleClose }) => {
  const [vehicleData, setVehicleData] = useState(vehicle);
  const { updateVehicle, drivers } = useContext(AppContext);
  const {
    id,
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
    vehicle_avatar,
  } = vehicleData;

  const [isAssignDriverModalOpen, setIsAssignDriverModalOpen] = useState(false);
  const buttonText = status === "active" ? "Deactivate" : "Activate";
  const buttonColor = status === "active" ? "bg-red-500" : "bg-green-500";

  const changeVehicleStatus = async (currentStatus) => {
    if (!vehicle) return;
    if (currentStatus === "active") {
      const response = await deactivateVehicle(id);
      const updatedVehicle = response.vehicle;
      updateVehicle(id, updatedVehicle);
      setVehicleData(updatedVehicle);
    } else {
      const response = await activateVehicle(id);
      const updatedVehicle = response.vehicle;
      updateVehicle(id, updatedVehicle);
      setVehicleData(updatedVehicle);
    }
  };

  const [showRenewModal, setShowRenewModal] = useState(false);
  const [renewFormData, setRenewFormData] = useState({
    vehicle_insurance_issue_organisation: "",
    vehicle_insurance_issue_date: "",
    vehicle_insurance_expiry: "",
  });

  const handleRenewButtonClick = () => {
    setShowRenewModal(true);
  };

  const handleRenewFormSubmit = async (e) => {
    e.preventDefault();
    const response = await renewVehicleInsurance(id, renewFormData);
    const updatedVehicle = response.vehicle;
    updateVehicle(id, updatedVehicle);
    setVehicleData(updatedVehicle);
    setShowRenewModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRenewFormData({
      ...renewFormData,
      [name]: value,
    });
  };

  useEffect(() => {
    setVehicleData(vehicle);
  }, [vehicle]);

  const toggleAssignDriverModal = () => {
    setIsAssignDriverModalOpen(!isAssignDriverModalOpen);
  };

  const handleAssignDriver = async (driverId) => {
    const response = await assignDriverToVehicle(id, driverId);
    const updatedVehicle = response.vehicle;
    updateVehicle(id, updatedVehicle);
    setVehicleData(updatedVehicle);
    setIsAssignDriverModalOpen(false);
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
                  <VehicleAvatar imageUrl={vehicle_avatar} status={status} />
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
                          <i className="fa-regular fa-calendar"></i>
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

                  {isAssignDriverModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-5 rounded-lg shadow-lg">
                        <DriversToAssign
                          drivers={drivers}
                          onClose={toggleAssignDriverModal}
                          handleAssignDriver={handleAssignDriver}
                        />
                      </div>
                    </div>
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
                    onClick={toggleAssignDriverModal}
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
