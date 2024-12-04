# Contact Search 

This **Contact Search App** is a React-based project that enables users to filter, view, and select contact information efficiently. It includes advanced filtering, pagination, and a responsive user interface to deliver a smooth and intuitive experience.

---

## Features  

1. **Search Contacts:**  
   - Filter contacts based on **first name**, **last name**, **email**, **phone**, and **address details** (street, city, state, and zip code).  

2. **Pagination:**  
   - Easily navigate through contact records with paginated results for better performance and organization.  

3. **Select Contact Details:**  
   - View detailed information of a selected contact.  

4. **User-Friendly Design:**  
   - A responsive, clean, and modern UI ensures compatibility across devices.  

5. **Real-Time Feedback:**  
   - Instant indication if no results match the search criteria.  

---

## Tech Stack  

- **Frontend Framework:** React.js  
- **Styling:** TailwindCSS and custom CSS  
- **Data:** Mock data from a JSON file for contact information  

---

## How to Use  

1. **Set Filters:**  
   - Use the search bar to input any criteria, such as first name, last name, email, phone number, or address details.  

2. **Search:**  
   - Click the **Search** button to filter the contact list based on the entered criteria.  

3. **View Results:**  
   - The results table will display contacts matching the search. Use pagination to browse through multiple pages.  

4. **Select a Contact:**  
   - Click on a contact to view its full details in the **Selected Contact** section.  

---

## File Structure  

```plaintext
src/  
├── components/  
│   ├── SearchBar.js          # Search bar with input fields  
│   ├── ResultsTable.js       # Table displaying filtered contacts  
│   ├── SelectedContact.js    # Displays detailed contact info  
│   └── Pagination.js         # Handles pagination UI and logic  
├── data/  
│   └── contactData.json      # Mock contact data  
├── styles/  
│   └── styles.css            # Custom styling  
└── App.js                    # Main application logic  
```  

---

## Future Improvements  

- **Backend Integration:**  
   - Connect to a live database to handle real-time data updates.  

- **Sorting Options:**  
   - Add options to sort by first name, last name, or other fields.  

- **Advanced Filters:**  
   - Enable filtering by date of birth or custom tags.  

- **Responsive Improvements:**  
   - Further optimize the UI for small screens.  

---

## Contributing  

Contributions are welcome!  

1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m "Add feature description"`).  
4. Push to the branch (`git push origin feature-name`).  
5. Open a Pull Request.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  

---

## Contact  

If you have any questions or suggestions, feel free to reach out:  

- **Email:** your-email@example.com  
- **GitHub:** [yourusername](https://github.com/yourusername)  

Enjoy using the **Contact Search Feature**! 😊
