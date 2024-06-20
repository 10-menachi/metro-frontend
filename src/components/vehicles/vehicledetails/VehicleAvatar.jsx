import axios from "axios";
import React, { useEffect, useState } from "react";

const VehicleAvatar = ({ imageUrl, status }) => {
  const [vehicleImage, setVehicleImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (imageUrl) {
        try {
          const link = `${
            import.meta.env.VITE_API_URL
          }/vehicles-avatar/${imageUrl}`;
          const response = await axios.get(link, { responseType: "blob" });

          // Assuming you want to display the fetched image directly
          const url = URL.createObjectURL(response.data);
          setVehicleImage(url);
        } catch (error) {
          console.error("Error fetching vehicle avatar:", error);
          setVehicleImage(null); // Reset image state on error
        }
      }
    };

    fetchImage();

    return () => {
      if (vehicleImage) {
        URL.revokeObjectURL(vehicleImage); // Clean up object URL on unmount
      }
    };
  }, [imageUrl]);

  const anonymousVehicleSvg = (
    <svg
      className="absolute w-16 h-16 text-gray-400 p-2"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 11V9a3 3 0 013-3h8a3 3 0 013 3v2h1a1 1 0 011 1v6a1 1 0 01-1 1h-1a2 2 0 01-4 0h-6a2 2 0 01-4 0H4a1 1 0 01-1-1v-6a1 1 0 011-1h1zm2-2v2h10V9a1 1 0 00-1-1H8a1 1 0 00-1 1zm11 4a1 1 0 110 2 1 1 0 010-2zm-10 0a1 1 0 110 2 1 1 0 010-2z"></path>
    </svg>
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
        anonymousVehicleSvg
      )}
    </div>
  );
};

export default VehicleAvatar;
