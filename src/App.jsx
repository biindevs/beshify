import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateOutput = () => {
    const words = inputValue.split(' ');
    const output = words.map((word, index) => {
      if (index !== words.length - 1) {
        return `${word} 🤸🤸`;
      } else {
        return word;
      }
    });
    return output.join(' ');
  };

  const outputRef = useRef(null);

  const handleSelectClick = () => {
    outputRef.current.select();
  };

  const handleCopyClick = () => {
    outputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <>
      <h1>🤸Start beshifying🤸</h1>
      <div className="card">
        <div className="input-output">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your text"
            className="input-field"
          />
          {inputValue && (
            <>
              <textarea
                ref={outputRef}
                value={generateOutput()}
                readOnly
                className="output-field"
              />
              <div className="buttons">
                <button onClick={handleSelectClick}>Select All</button>
                <button onClick={handleCopyClick}>Copy</button>
              </div>
            </>
          )}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
