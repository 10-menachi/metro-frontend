import React, { useEffect } from "react";
import { useStateValue } from "../../context/AddTripContext";
import Loading from "../Loading";

const AddTrip = ({ isOpen, onClose }) => {
  const { state, dispatch } = useStateValue();

  useEffect(() => {
    if (isOpen) {
      // Initialize form data with default values
      dispatch({
        type: "SET_FORM_DATA",
        payload: {
          customer: state.customers.length ? state.customers[0].id : "",
          route: state.routes.length ? state.routes[0].id : "",
          trip_date: "",
          start_time: "",
          end_time: "",
          pickup_location: "home",
          dropoff_location: "home",
        },
      });
    }
  }, [isOpen, state.customers, state.routes, dispatch]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    dispatch({
      type: "SET_FORM_DATA",
      payload: { [e.target.id]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state.formData);
  };

  if (!state.customers.length || !state.routes.length) return <Loading />;

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    >
      <div className="relative w-full max-w-md p-4 max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add New Trip
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="customer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Employee
                </label>
                <select
                  id="customer"
                  name="customer"
                  className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={state.formData.customer}
                  onChange={handleChange}
                >
                  {state.customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.user.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="route"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Route
                </label>
                <select
                  id="route"
                  name="route"
                  className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={state.formData.route}
                  onChange={handleChange}
                >
                  {state.routes.map((route) => (
                    <option key={route.id} value={route.id}>
                      {route.location}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="trip_date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Trip Date
                </label>
                <input
                  type="date"
                  id="trip_date"
                  name="trip_date"
                  className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={state.formData.trip_date}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="start_time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Shift Start Time
                  </label>
                  <input
                    type="time"
                    id="start_time"
                    name="start_time"
                    className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    value={state.formData.start_time}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="end_time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Shift End Time
                  </label>
                  <input
                    type="time"
                    id="end_time"
                    name="end_time"
                    className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    value={state.formData.end_time}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="pickup_location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pickup Location
                  </label>
                  <select
                    id="pickup_location"
                    name="pickup_location"
                    className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    value={state.formData.pickup_location}
                    onChange={handleChange}
                  >
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="dropoff_location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Dropoff Location
                  </label>
                  <select
                    id="dropoff_location"
                    name="dropoff_location"
                    className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    value={state.formData.dropoff_location}
                    onChange={handleChange}
                  >
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Trip
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrip;
