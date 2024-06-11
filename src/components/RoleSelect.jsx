import React from "react";

const RoleSelect = ({ handleChange }) => {
  return (
    <div className="max-w-sm mx-auto">
      <label
        htmlFor="role"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select Membership
      </label>
      <select
        id="role"
        name="role"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
      >
        <option value="">Choose a membership</option>
        <option value="organisation">Organization</option>
        <option value="driver">Driver</option>
        <option value="employee">Employee</option>
      </select>
    </div>
  );
};

export default RoleSelect;
