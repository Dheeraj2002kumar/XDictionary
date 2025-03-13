import { useState } from 'react'
import './App.css'

const initialDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [error, setError] = useState("");

  // handle the search operation
  const handleSearch = () => {
    setError("");

    const result = initialDictionary.find (
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    
    // if found, show the definition, else show an error
    if (result){
      setDefinition(result.meaning);
    } else {
      setError("Word not found in the dictionary.");
      setDefinition("");  // clear any previous definition
    }
  };

  return (
    <div className='App'>
      <h1>XDictionary</h1>

      {/* search bar and button */}
      <div>
        <input 
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Enter word to search'
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display the result */}
      {definition && (
        <div>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </div>
      )}

      {/* Display error message if word not found */}
      { error && <p>{ error }</p>}
    </div>
  );
}

export default App
