import React, { useState } from 'react';
import Navbar from './Navbar';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
  };

  return (
    <>
    <Navbar/>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '118vh',
      backgroundColor: '#f7f8fc'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '10px',
          color: '#333'
        }}>Contact Us</h2>

        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#555',
          fontWeight: 'bold'
        }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />

        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#555',
          fontWeight: 'bold'
        }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />

        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#555',
          fontWeight: 'bold'
        }}>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            resize: 'none'
          }}
        />

        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
           onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default ContactForm;
