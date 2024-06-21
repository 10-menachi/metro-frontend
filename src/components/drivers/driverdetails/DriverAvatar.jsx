import axios from "axios";
import React, { useEffect, useState } from "react";

const DriverAvatar = ({ imageUrl, status }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      if (imageUrl) {
        try {
          console.log(imageUrl);
          const response = await axios.get(`/driver-avatar/${imageUrl}`, {
            responseType: "blob",
          });
          const url = URL.createObjectURL(response.data);
          console.log(url);
          setAvatar(url);
        } catch (error) {
          console.error("Error fetching driver avatar:", error);
          setAvatar(null);
        }
      }
    };

    fetchAvatar();

    return () => {
      if (avatar) {
        URL.revokeObjectURL(avatar);
      }
    };
  }, [imageUrl]);

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
      {avatar ? (
        <img
          className="object-cover w-full h-full rounded-full"
          src={avatar}
          alt="Driver avatar"
        />
      ) : (
        anonymousDriverIcon
      )}
    </div>
  );
};

export default DriverAvatar;
