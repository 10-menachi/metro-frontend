import React from "react";

const RenewInsurance = ({
  setShowRenewModal,
  handleRenewFormSubmit,
  renewFormData,
  handleInputChange,
}) => {
  return (
    <div className="modal bg-gray-400">
      <div className="modal-content">
        <span
          className="close text-black float-end m-4"
          onClick={() => setShowRenewModal(false)}
        >
          <i className="fas fa-times ring-2 ring-red-500 rounded-full p-1 bg-red-100 hover:bg-red-200 cursor-pointer dark:text-white dark:bg-red-500 dark:hover:bg-red-600 dark:ring-red-600 dark:ring-2"></i>
        </span>
        <h2 className="text-lg font-semibold m-8">Renew Insurance</h2>
        <form onSubmit={handleRenewFormSubmit}>
          <div className="m-8">
            <label
              htmlFor="organisation"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Organisation
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={renewFormData.organisation}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="XYZ Insurance Company"
              required
            />
          </div>
          <div className="m-8">
            <label
              htmlFor="startDate"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={renewFormData.startDate}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="m-8">
            <label
              htmlFor="endDate"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={renewFormData.endDate}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RenewInsurance;
