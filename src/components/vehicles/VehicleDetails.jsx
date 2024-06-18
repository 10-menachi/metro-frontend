import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import VehicleAvatar from "./VehicleAvatar";
import { getDriver } from "../../utils/common";

const VehicleDetails = ({ vehicle, isOpen, handleClose }) => {
  const [driver, setDriver] = useState(null);
  const {
    model,
    make,
    year,
    plate_number,
    seats,
    fuel_type,
    color,
    status,
    driver_id,
  } = vehicle;

  useEffect(() => {
    async function fetchDriver() {
      const driver = await getDriver(driver_id);
      const { user } = driver;
      setDriver(user);
    }

    fetchDriver();
  }, []);

  const buttonText = status === "active" ? "Deactivate" : "Activate";
  const buttonColor = status === "active" ? "bg-red-500" : "bg-green-500";

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
              <div className="bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
                      {driver_id ? driver?.name : "No driver assigned"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className={`w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm ${buttonColor}`}
                >
                  {buttonText}
                </button>
                {!driver_id && (
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
