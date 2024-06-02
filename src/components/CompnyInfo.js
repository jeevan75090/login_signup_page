import React from 'react';

const CompanyInfo = () => (
    <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
        marginTop: '20px',
        textAlign: 'center'
    }}>
        <h1 style={{ 
            color: '#007bff',
            marginBottom: '15px'
        }}>Company Info</h1>
        <p style={{ 
            margin: '5px 0', 
            color: '#555',
            fontSize: '16px'
        }}>Company: Geeksynergy Technologies Pvt Ltd</p>
        <p style={{ 
            margin: '5px 0', 
            color: '#555',
            fontSize: '16px'
        }}>Address: Sanjayanagar, Bengaluru-56</p>
        <p style={{ 
            margin: '5px 0', 
            color: '#555',
            fontSize: '16px'
        }}>Phone: XXXXXXXXX09</p>
        <p style={{ 
            margin: '5px 0', 
            color: '#555',
            fontSize: '16px'
        }}>Email: XXXXXX@gmail.com</p>
    </div>
);

export default CompanyInfo;
