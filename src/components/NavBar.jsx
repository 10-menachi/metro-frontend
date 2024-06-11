import React, { useState } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../utils/constants";

const NavBar = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { name, email, avatar, address, phone, role } = user || {};
  const logoutUser = () => {
    console.log("Logging out user");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getInitials = (fullName) => {
    const names = fullName.split(" ");
    let initials = "";
    if (names.length === 1) {
      initials +=
        names[0].charAt(0).toUpperCase() +
        names[0].charAt(names[0].length - 1).toUpperCase();
    } else if (names.length > 1) {
      initials +=
        names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
    }
    return initials;
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 ring-gray-50 focus: dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-gray-300"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to={APP_ROUTES.DASHBOARD} className="flex ms-2 md:me-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Metro Berry
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className={`ring-4 ring-gray-300 flex items-center justify-center w-8 h-8 text-sm ${
                    avatar ? "bg-gray-200" : "bg-gray-800"
                  } rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`}
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  {!avatar ? (
                    <span className="text-white w-full rounded-full ">
                      {getInitials(name)}
                    </span>
                  ) : (
                    <img className="w-8 h-8 rounded-full" src={avatar} alt="" />
                  )}
                </button>
              </div>
              {isDropdownOpen && (
                <div
                  className="absolute top-12 right-8 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {name}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      {email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li onClick={toggleDropdown}>
                      <Link
                        to={APP_ROUTES.DASHBOARD}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li onClick={toggleDropdown}>
                      <Link
                        to={APP_ROUTES.PROFILE}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Profile
                      </Link>
                    </li>
                    <li onClick={toggleDropdown}>
                      <Link
                        to={"#"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        onClick={logoutUser}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
