// src/ContactForm.js
// IMPORT DATABASE

import { db } from "../firebase";

import React, { useState } from "react";
import styles from "./Contact.module.css"; // Assuming you're using CSS Modules for styling
import { waitForPendingWrites } from "firebase/firestore";

function ContactForm() {
  // Define the initial form data in a separate variable
  const initialFormData = {
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  };

  // Use the initial form data in useState
  const [formData, setFormData] = useState(initialFormData);

  // Handle changes to form fields
  const handleChange = (event) => {
    const { name, value } = event.target; // Get the name and value from the input

    setFormData({
      ...formData, // Keep the existing form data
      [name]: value, // Update the specific field (name, email, mobileNumber, message)
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    const { name, email, mobileNumber, message } = formData;

    // Display an alert with the form data
    alert(
      `Form submitted: \nName: ${formData.name}\nEmail: ${formData.email}\nMobile Number: ${formData.mobileNumber}\nMessage: ${formData.message}`
    );
    console.log(
      `Form submitted: Name: ${formData.name}Email: ${formData.email}Mobile Number: ${formData.mobileNumber} Message: ${formData.message}`
    );
    // Clear form fields after submission

    try {
      const res = await fetch(
        "https://contactform-ff635-default-rtdb.firebaseio.com/saddamDB.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobileNumber,
            message,
          }),
        }
      );

      console.log("res", res);
      if (res.status === 200) {
        alert("data stored successfully");
        setFormData(initialFormData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name} // Display the current name value
            onChange={handleChange} // Call handleChange when user types
            className={styles.formControl}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email} // Display the current email value
            onChange={handleChange} // Call handleChange when user types
            className={styles.formControl}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber} // Display the current mobile number value
            onChange={handleChange} // Call handleChange when user types
            className={styles.formControl}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message} // Display the current message value
            onChange={handleChange} // Call handleChange when user types
            className={styles.formControl}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
