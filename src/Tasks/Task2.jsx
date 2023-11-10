import React, { useState, useEffect } from 'react';

export function Task2() {
    const numericKeys = [
        {
            code: 55,
            label: "7"
        },
        {
            code: 56,
            label: "8"
        },
        {
            code: 57,
            label: "9"
        },
        {
            code: 52,
            label: "4"
        },
        {
            code: 53,
            label: "5"
        },
        {
            code: 54,
            label: "6"
        },
        {
            code: 49,
            label: "1"
        },
        {
            code: 50,
            label: "2"
        },
        {
            code: 51,
            label: "3"
        },
        {
            code: 48,
            label: "0"
        },
        {
            code: 190,
            label: "."
        },
        {
            code: 13,
            label: "="
        }
    ]

    const symbolKeys = [
        {
            label: "⌫",
            code: 8,
            value: "backspace",
        },
        {
            label: "÷",
            code: 111,
            value: "/",
        },
        {
            label: "x",
            code: 56,
            value: "*",
        },
        {
            label: "-",
            code: 109,
            value: "-",
        },
        {
            label: "+",
            code: 107,
            value: "+",
        },
    ]

    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(null);

    const handleKeyPress = (code, key) => {
        let updatedExpression = expression;

        if (code === 8) {
            updatedExpression = updatedExpression.slice(0, -1);
            setResult(null);
        }
        else if (code === 13) {
            try {
                const computedResult = eval(expression);
                setResult(computedResult);
                updatedExpression = '';
            } catch (error) {
                setResult('Error');
                updatedExpression = 'Error';
            }
        }
        else {
            setResult(null);
            updatedExpression += key;
        }

        setExpression(updatedExpression);
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { keyCode, key } = event;
            const isNumericKey = numericKeys.some((item) => item.code === keyCode);
            const isSymbolKey = symbolKeys.some((item) => item.code === keyCode);

            if (isNumericKey || isSymbolKey) {
                handleKeyPress(keyCode, isNumericKey ? key : symbolKeys.find(item => item.code === keyCode).value);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyPress, numericKeys, symbolKeys]);


    const headingStyle = {
        fontSize: '40px',
        fontWeight: 'bold',
        backgroundColor: "transparent"
    };

    const subheadingStyle = {
        padding: "16px",
        fontSize: '24px',
        backgroundColor: "transparent"
    };

    return (
        <div className='container p-0 bg-light  border border-0'>
            <h1 style={headingStyle}>Arvind Royam</h1>
            <h2 style={subheadingStyle}>21BCI0027</h2>
            <div className='display'>
                <div className='display-expression'>
                    {expression !== '' && <p>{expression}</p>}
                </div>
                <div className='display-answer'>
                    {result !== null && <p>{result}</p>}
                </div>
            </div>
            <div className='keypad' >
                <div className='keypad-keys'>
                    {
                        numericKeys.map((item, index) => (
                            <p onClick={() => handleKeyPress(item.code, item.label)} key={index} > {item.label}</p>)
                        )
                    }
                </div>
                <div className='keypad-symbols'>
                    {
                        symbolKeys.map((item, index) => (
                            <p onClick={() => handleKeyPress(item.code, item.value)} key={index}>{item.label}</p>))
                    }
                </div>
            </div>
        </div>
    )
}
