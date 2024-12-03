import React, { useState } from "react";
import data from "./data/contactData.json";
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import SelectedContact from "./components/SelectedContact";
import Pagination from "./components/Pagination";
import "./styles/styles.css";

//Setting Filters
const App = () => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const [filteredContacts, setFilteredContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isSearched, setIsSearched] = useState(false);

  //////////////////////////////PAGINATION////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  // Calculate the total pages based on the filtered contacts
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  // Calculate the index of the last and first contact for pagination
  const indexOfLastContact = currentPage * itemsPerPage;
  const indexOfFirstContact = indexOfLastContact - itemsPerPage;

  // Slice the filtered contacts based on the current page
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  //////////////////////////////PAGINATION////////////////////////////////

  // Handle search based on last name validation
  const handleSearch = () => {
    const filteredData = data.filter((contact) => {
      return (
        (contact.firstName
          .toLowerCase()
          .includes(filters.firstName.toLowerCase()) ||
          filters.firstName === "") &&
        (contact.lastName
          .toLowerCase()
          .includes(filters.lastName.toLowerCase()) ||
          filters.lastName === "") &&
        (contact.email.toLowerCase().includes(filters.email.toLowerCase()) ||
          filters.email === "") &&
        (contact.phone.includes(filters.phone) || filters.phone === "") &&
        (contact.address.street
          .toLowerCase()
          .includes(filters.address.street.toLowerCase()) ||
          filters.address.street === "") &&
        (contact.address.city
          .toLowerCase()
          .includes(filters.address.city.toLowerCase()) ||
          filters.address.city === "") &&
        (contact.address.state
          .toLowerCase()
          .includes(filters.address.state.toLowerCase()) ||
          filters.address.state === "") &&
        (contact.address.zip.includes(filters.address.zip) ||
          filters.address.zip === "")
      );
    });
    setFilteredContacts(filteredData);
    setIsSearched(true);
    setCurrentPage(1);
  };

  // Handle contact selection
  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="font-sans">
          Contact Search Feature for 2Creative Solutions
        </h1>
      </div>

      <div className="container mx-auto p-4">
        <SearchBar
          filters={filters}
          setFilters={setFilters}
          handleSearch={handleSearch}
        />

        {isSearched && (
          <>
            {filteredContacts.length > 0 ? (
              <ResultsTable
                contacts={currentContacts} // Show contacts for the current page
                handleSelectContact={handleSelectContact}
              />
            ) : (
              <p className="mt-4 text-center text-gray-500">No results found</p>
            )}
          </>
        )}

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange} // Pass the page change function
        />

        <SelectedContact selectedContact={selectedContact} />
      </div>
    </>
  );
};

export default App;
