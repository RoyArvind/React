import React, { useState } from 'react';

export function Task5() {
    const [newAge, setNewAge] = useState(null);
    const [newDate, setNewDate] = useState('');

    const setNewBirthdate = (event) => {
        setNewDate(event.target.value);
    }

    const calculateNewAge = () => {
        var today = new Date();
        var birthDate = new Date(newDate);
        var ageYears = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            ageYears--;
        }
        setNewAge(ageYears);
    }

    const headingStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        padding: "10px"
    };

    const subheadingStyle = {
        fontSize: '24px',
        padding: "10px"
    };

    return (
        <div style={{ textAlign: 'center', paddingTop: '5rem' }}>
            <h1 style={headingStyle}>Arvind Royam</h1>
            <h2 style={subheadingStyle}>21BCI0027</h2>
            <h1 style={{ fontWeight: 'bold', marginBottom: '3rem' }}>Age Calculator</h1>
            <h6 style={{ fontWeight: 'bold', marginBottom: '2rem' }}>Enter your date of birth</h6>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <input type='date' style={{ width: '30%', padding: '0.5rem' }} onChange={setNewBirthdate}></input>
                <button style={{ width: '20%', padding: '0.5rem', backgroundColor: 'blue', color: 'white', marginTop: '2rem', cursor: 'pointer' }} onClick={calculateNewAge}>Calculate Age</button>
            </div>
            <div style={{ marginTop: '4rem' }}>
                {newAge !== null && <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>You are {newAge} years old.</p>}
            </div>
        </div>
    )
}
