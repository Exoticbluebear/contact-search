import React from "react";

const ResultsTable = ({ contacts, handleSelectContact }) => {
  return (
    <div className="contacts-table my-4">
      {contacts.length > 0 ? (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Name</th>
              <th className="border-b p-2 text-left">DOB</th>
              <th className="border-b p-2 text-left">Address</th>
              <th className="border-b p-2 text-left">City</th>
              <th className="border-b p-2 text-left">State</th>
              <th className="border-b p-2 text-left">Zip</th>
              <th className="border-b p-2 text-left">Email</th>
              <th className="border-b p-2 text-left">Phone</th>
              <th className="border-b p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                onClick={() => handleSelectContact(contact)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="border-b p-2">
                  {contact.firstName} {contact.lastName}
                </td>
                <td className="border-b p-2">{contact.dateOfBirth}</td>
                <td className="border-b p-2">{contact.address?.street}</td>
                <td className="border-b p-2">{contact.address?.city}</td>
                <td className="border-b p-2">{contact.address?.state}</td>
                <td className="border-b p-2">{contact.address?.zip}</td>
                <td className="border-b p-2">{contact.email}</td>
                <td className="border-b p-2">{contact.phone}</td>
                <td className="border-b p-2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default ResultsTable;
