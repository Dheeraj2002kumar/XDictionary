import React, { useState } from "react";
// import "./App.css";

// Initial dictionary state
const initialDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  {
    word: "Component",
    meaning: "A reusable building block in React.",
  },
  {
    word: "State",
    meaning: "An object that stores data for a component.",
  },
];

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    setDefinition("");

    const result = initialDictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (result) {
      setDefinition(result.meaning);
    } else {
      setError("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1> 

      {/* Search bar and button */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter word to search"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {definition && (
        <div>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </div>
      )}

      {error &&  (<div><h3>Definition:</h3><p>{error}</p> </div>)}
    </div>
  );
}

export default App;
