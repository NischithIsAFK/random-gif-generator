import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [gifUrl, setGifUrl] = useState("");
  const [tag, setTag] = useState("");

  const generateGif = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL,
        { tag },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setGifUrl(response.data.apiurl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>GIF Generator</h1>

      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Enter a tag (e.g., avengers)"
      />

      <div>
        {tag && (
          <button type="button" onClick={generateGif}>
            Generate GIF
          </button>
        )}
      </div>
      <div>
        {gifUrl && (
          <img
            src={gifUrl}
            alt="Generated GIF"
            style={{ width: "300px", height: "300px" }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
