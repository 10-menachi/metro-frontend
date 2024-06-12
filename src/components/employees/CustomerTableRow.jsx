import React from "react";

const CustomerTableRow = ({ customer }) => {
  const { name, email, phone, address } = customer;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{email || "-"}</td>
      <td className="px-6 py-4">{phone || "-"}</td>
      <td className="px-6 py-4">{address || "-"}</td>
    </tr>
  );
};

export default CustomerTableRow;
