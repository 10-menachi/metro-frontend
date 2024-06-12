import React from "react";
import CustomerTableRow from "./CustomerTableRow";

const EmployeeTable = ({ customers }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            const { user } = customer;
            return <CustomerTableRow key={user.id} customer={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
