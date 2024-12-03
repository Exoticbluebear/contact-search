import React from "react";

const SearchBar = ({ filters, setFilters, handleSearch }) => {
  const states = [
    { id: 1, name: "AL" }, // Alabama
    { id: 2, name: "AK" }, // Alaska
    { id: 3, name: "AZ" }, // Arizona
    { id: 4, name: "AR" }, // Arkansas
    { id: 5, name: "CA" }, // California
    { id: 6, name: "CO" }, // Colorado
    { id: 7, name: "CT" }, // Connecticut
    { id: 8, name: "DE" }, // Delaware
    { id: 9, name: "FL" }, // Florida
    { id: 10, name: "GA" }, // Georgia
    { id: 11, name: "HI" }, // Hawaii
    { id: 12, name: "ID" }, // Idaho
    { id: 13, name: "IL" }, // Illinois
    { id: 14, name: "IN" }, // Indiana
    { id: 15, name: "IA" }, // Iowa
    { id: 16, name: "KS" }, // Kansas
    { id: 17, name: "KY" }, // Kentucky
    { id: 18, name: "LA" }, // Louisiana
    { id: 19, name: "ME" }, // Maine
    { id: 20, name: "MD" }, // Maryland
    { id: 21, name: "MA" }, // Massachusetts
    { id: 22, name: "MI" }, // Michigan
    { id: 23, name: "MN" }, // Minnesota
    { id: 24, name: "MS" }, // Mississippi
    { id: 25, name: "MO" }, // Missouri
    { id: 26, name: "MT" }, // Montana
    { id: 27, name: "NE" }, // Nebraska
    { id: 28, name: "NV" }, // Nevada
    { id: 29, name: "NH" }, // New Hampshire
    { id: 30, name: "NJ" }, // New Jersey
    { id: 31, name: "NM" }, // New Mexico
    { id: 32, name: "NY" }, // New York
    { id: 33, name: "NC" }, // North Carolina
    { id: 34, name: "ND" }, // North Dakota
    { id: 35, name: "OH" }, // Ohio
    { id: 36, name: "OK" }, // Oklahoma
    { id: 37, name: "OR" }, // Oregon
    { id: 38, name: "PA" }, // Pennsylvania
    { id: 39, name: "RI" }, // Rhode Island
    { id: 40, name: "SC" }, // South Carolina
    { id: 41, name: "SD" }, // South Dakota
    { id: 42, name: "TN" }, // Tennessee
    { id: 43, name: "TX" }, // Texas
    { id: 44, name: "UT" }, // Utah
    { id: 45, name: "VT" }, // Vermont
    { id: 46, name: "VA" }, // Virginia
    { id: 47, name: "WA" }, // Washington
    { id: 48, name: "WV" }, // West Virginia
    { id: 49, name: "WI" }, // Wisconsin
    { id: 50, name: "WY" }, // Wyoming
  ];

  const validateSearch = () => {
    if (!filters.lastName.trim()) {
      alert("Last Name is required to perform a search.");
      return false;
    }
    return true;
  };

  const handleSearchClick = () => {
    if (validateSearch()) {
      handleSearch();
    }
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-2">
        <div className=" flex gap-4">
          {/* First Name Filter */}
          <div className="block mb-1">
            <label>First Name</label>
            <input
              type="text"
              value={filters.firstName}
              onChange={(e) =>
                setFilters({ ...filters, firstName: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Last Name Filter */}
          <div className="block mb-1">
            <label className="lastNameLabel">*Last Name</label>
            <input
              type="text"
              value={filters.lastName || ""}
              onChange={(e) =>
                setFilters({ ...filters, lastName: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Date of Birth Filter */}
          <div className="block mb-1">
            <label>Date of birth</label>
            <input
              type="date"
              value={filters.dateOfBirth}
              onChange={(e) =>
                setFilters({ ...filters, dateOfBirth: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Street Address */}
        <div className="flex">
          <div className="block mb-1">
            <label>Street Address</label>
            <input
              type="text"
              value={filters.address?.street}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  address: {
                    ...filters.address,
                    street: e.target.value,
                  },
                })
              }
              placeholder="Street Address"
              className="p-2 border border-gray-300 rounded-md w-96"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <div className="block mb-1">
            {/* Email Filter */}
            <label>Email Address</label>
            <input
              type="email"
              value={filters.email}
              onChange={(e) =>
                setFilters({ ...filters, email: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="block mb-1">
            {/* Phone Filter */}
            <label>Phone number</label>
            <input
              type="tel"
              value={filters.phone}
              onChange={(e) =>
                setFilters({ ...filters, phone: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* City Filter */}
        <div className="flex gap-4">
          <div className="block mb-1">
            <label>City</label>
            <input
              type="text"
              value={filters.address?.city}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  address: {
                    ...filters.address,
                    city: e.target.value,
                  },
                })
              }
              placeholder="City"
              className="p-2 border border-gray-300 rounded-md w-40"
            />
          </div>
          {/* State Filter */}
          <div className="block mb-1">
            <label>State</label>
            <select
              type="text"
              value={filters.address?.state}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  address: {
                    ...filters.address,
                    state: e.target.value,
                  },
                })
              }
              className="p-2 border border-gray-300 rounded-md w-24 h-10"
            >
              <option value="">Select</option>
              {states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          {/* Zip Code Filter */}
          <div className="block mb-1">
            <label>Zip Code</label>
            <input
              type="text"
              value={filters.address?.zip}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  address: {
                    ...filters.address,
                    zip: e.target.value,
                  },
                })
              }
              placeholder="Zip Code"
              className="p-2 border border-gray-300 rounded-md w-24"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-32"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
