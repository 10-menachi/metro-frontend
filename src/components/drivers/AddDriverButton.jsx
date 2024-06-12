import React, { useState } from "react";

const AddDriverButton = ({ handleOpen }) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={handleOpen}
        className="text-white bg-blue-600 hover:bg-blue-700 outline-none font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <span className="hidden sm:inline">Add Driver</span>
      </button>
    </div>
  );
};

export default AddDriverButton;
