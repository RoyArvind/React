import React, { useState } from 'react';

export function Task3(props) {
    const [showColors, setShowColors] = useState(false);
    const [selectedColor, setSelectedColor] = useState("pink")

    const handleShowColors = () => {
        setShowColors(true);
    }

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        setShowColors(false);
    }

    const headingStyle = {
        fontSize: '40px',
        padding: "16px",
        fontWeight: 'bold',
    };

    const subheadingStyle = {
        padding: "16px",
        fontSize: '24px',
    };
    return (
        <div className='container pt-4' style={{ width: "100%" }}>
            <h1 style={headingStyle}>Arvind Royam</h1>
            <h2 style={subheadingStyle}>21BCI0027</h2>
            <h3 className='text-center fw-bolder'>Color Picker</h3>
            <div style={{ backgroundColor: selectedColor }} className='display2 m-auto d-flex flex-column align-items-center justify-content-center mb-5'>
                <div className='d-flex flex-wrap justify-content-center color-bar'>
                    {showColors && props.colors.map((color, index) => (
                        <div
                            key={index}
                            className='color-box'
                            style={{ backgroundColor: color }}
                            onClick={() => { handleSelectColor(color) }}
                        ></div>
                    ))}
                </div>
                <button className='btn btn-success button' onClick={handleShowColors}>Pick a color</button>
            </div>
        </div>
    )
}
