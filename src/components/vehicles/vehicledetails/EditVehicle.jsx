import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { editVehicle } from "../../../utils/vehicleUtils";

const EditVehicle = ({ vehicle, handleClose }) => {
  const { updateVehicle } = useContext(AppContext);
  const [formData, setFormData] = useState({
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    plate_number: vehicle.plate_number,
    seats: vehicle.seats,
    color: vehicle.color,
    fuel_type: vehicle.fuel_type,
    engine_size: vehicle.engine_size,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await editVehicle(vehicle.id, formData);
    const updatedVehicle = response.vehicle;
    updateVehicle(vehicle.id, updatedVehicle);
    handleClose();
  };

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit Vehicle
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center"
              onClick={handleClose}
            >
              <i className="fas fa-times"></i>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form
              className="space-y-4 flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="make"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Make
                  </label>
                  <input
                    type="text"
                    name="make"
                    id="make"
                    value={formData.make}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Toyota"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="model"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    id="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Corolla"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="model"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Year
                  </label>
                  <input
                    type="text"
                    name="year"
                    id="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Corolla"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Color
                  </label>
                  <input
                    type="text"
                    name="color"
                    id="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Corolla"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="plate_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Plate Number
                  </label>
                  <input
                    type="text"
                    name="plate_number"
                    id="plate_number"
                    value={formData.plate_number}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Corolla"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="plate_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Seats
                  </label>
                  <input
                    type="text"
                    name="seats"
                    id="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Corolla"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="fuel_type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fuel Type
                  </label>
                  <input
                    type="text"
                    name="fuel_type"
                    id="fuel_type"
                    value={formData.fuel_type}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Corolla"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    htmlFor="engine_size"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Engine Size
                  </label>
                  <input
                    type="text"
                    name="engine_size"
                    id="engine_size"
                    value={formData.engine_size}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Corolla"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVehicle;
