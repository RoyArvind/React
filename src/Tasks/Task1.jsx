import React, { useState, useEffect } from 'react';

const Task1 = () => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const changeHandler = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        const words = text.split(/\s+/).filter(word => word !== '');

        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);
    }, [text]);

    const containerStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const subheadingStyle = {
        fontSize: '16px',
    };

    return (
        <div>
            <h1 style={headingStyle}>Arvind Royam</h1>
            <h2 style={subheadingStyle}>21BCI0027</h2>
            <div className="container" style={containerStyle}>
                <h3>Responsive Paragraph Word Counter</h3>
                <div className="textarea-container">
                    <textarea value={text} onChange={changeHandler} placeholder="Word Counter ( type here )"></textarea>
                </div>
                <p className="displaycount">Word Count: {wordCount}</p>
            </div>
        </div>
    );
}

export default Task1;
