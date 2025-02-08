import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client'; 

const App = () => {
  const [count, setCount] = useState(300);


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        setCount((prevCount) => prevCount + 1); 
      } else if (event.ctrlKey) {
        setCount((prevCount) => prevCount - 1);
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div style={{
      fontSize: "2em",
      backgroundColor: "#000000",
      color: "#8B0000",
      textAlign: "center",
    }}>
      <h1>THIS IS SPARTAN COUNTER!</h1>
      <p> Count: {count} </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);