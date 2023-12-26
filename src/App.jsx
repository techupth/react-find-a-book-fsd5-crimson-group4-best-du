import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [data, setData] = useState([]);

  const getTextSearch = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${textSearch}`
    );
    // console.log(result);
    setData(result.data.items);
  };

  useEffect(() => {
    getTextSearch();
  }, [textSearch]);

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input
        type="text"
        onChange={(event) => {
          setTextSearch(event.target.value);
        }}
        value={textSearch}
      />
      <ul>
        {data.map((items, id) => (
          <li key={items.id}>
            <strong>{items.volumeInfo.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
