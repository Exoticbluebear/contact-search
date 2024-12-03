import React from "react";

const SelectedContact = ({ selectedContact }) => {
  if (!selectedContact) {
    return <p>Search and select a contact to see details</p>;
  }

  return (
    <div className="selected-contact p-4 border border-gray-200 rounded-md mt-4">
      <h2 className="text-xl font-bold">Contact Details</h2>
      <p>
        <strong>Name:</strong> {selectedContact.firstName}{" "}
        {selectedContact.lastName}
      </p>
      <p>
        <strong>Email:</strong> {selectedContact.email}
      </p>
      <p>
        <strong>Phone:</strong> {selectedContact.phone}
      </p>
      <p>
        <strong>Address:</strong> {selectedContact.address?.street},{" "}
        {selectedContact.address?.city}, {selectedContact.address?.state} -{" "}
        {selectedContact.address?.zip}
      </p>
    </div>
  );
};

export default SelectedContact;
