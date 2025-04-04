import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")  // Backend API URL
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => setMessage("Error: " + error.message));
  }, []);

  return (
    <div>
      <h1>AI Finance Assistant</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
