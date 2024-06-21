import React from "react";

const VehicleAvatar = ({ imageUrl, status }) => {
  const vehicleImage = imageUrl;
  const anonymousDriverIcon = (
    <i className="text-gray-400 fas fa-user text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
  );

  let ringColorClass = "ring-white";

  if (status === "active") {
    ringColorClass = "ring-green-500";
  } else if (status === "inactive") {
    ringColorClass = "ring-red-500";
  }

  return (
    <div
      className={`relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ${ringColorClass}`}
    >
      {vehicleImage ? (
        <img
          className="object-cover w-full h-full rounded-full"
          src={vehicleImage}
          alt="Vehicle avatar"
        />
      ) : (
        anonymousDriverIcon
      )}
    </div>
  );
};

export default VehicleAvatar;
