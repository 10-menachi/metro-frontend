import React, { Fragment, useState } from "react";
import { Transition, TransitionChild } from "@headlessui/react";
import { addVehicle } from "../../../utils/common";

const AddVehicle = ({ isOpen, handleClose }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    plate_number: "",
    seats: "",
    fuel_type: "",
    engine_size: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isVehicleAdded = await addVehicle(formData);
    if (isVehicleAdded) {
      handleClose();
      window.location.reload();
    }
  };

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 overflow-y-auto z-50">
        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </TransitionChild>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2xl sm:w-full">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Add Vehicle
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 mb-4">
                      <label
                        htmlFor="make"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Make
                      </label>
                      <input
                        type="text"
                        id="make"
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Vehicle Make"
                        required
                      />
                    </div>
                    <div className="col-span-1 mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Model
                      </label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Car Model"
                        required
                      />
                    </div>
                    <div className="col-span-1 mb-4">
                      <label
                        htmlFor="year"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Year
                      </label>
                      <input
                        type="year"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Year"
                        required
                      />
                    </div>
                    <div className="col-span-1 mb-4 relative">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Color
                      </label>
                      <input
                        type="text"
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Color"
                        required
                      />
                    </div>
                    <div className="col-span-1 mb-4 relative">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Plate Number
                      </label>
                      <input
                        type="text"
                        id="plate_number"
                        name="plate_number"
                        value={formData.plate_number}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Plate Number"
                        required
                      />
                    </div>
                    <div className="col-span-1 mb-4 relative">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Seats
                      </label>
                      <input
                        type="number"
                        id="seats"
                        name="seats"
                        value={formData.seats}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Seats"
                        required
                      />
                    </div>
                    <div className="col-span-1 mb-4 relative">
                      <label
                        htmlFor="fuel_type"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Fuel Type
                      </label>
                      <input
                        type="text"
                        id="fuel_type"
                        name="fuel_type"
                        value={formData.fuel_type}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Fuel Type"
                        required
                      />
                    </div>
                    <div className="col-span-1 mb-4 relative">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Engine Size
                      </label>
                      <input
                        type="text"
                        id="engine_size"
                        name="engine_size"
                        value={formData.engine_size}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Engine Size"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus
                    :ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Transition>
  );
};

export default AddVehicle;
