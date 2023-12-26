import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    setBooks(response.data.items);
  };
  useEffect(() => {
    handleSearch();
  }, [query]);
  return (
    <div className="App">
      <h1>Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter book title..."
      />

      <div>
        <h2>Search Results</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.volumeInfo.title}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
