import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [gifUrl, setGifUrl] = useState("");

  const generateGif = async () => {
    try {
      const response = await axios.get("your-api-url-from-backend");
      console.log(response.data);
      setGifUrl(response.data.apiurl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button type="button" onClick={generateGif}>
        Generate GIF
      </button>
      <div>
        {gifUrl && (
          <img
            src={gifUrl}
            alt="Generated GIF"
            style={{ width: "300px", height: "300px" }}
          />
        )}
      </div>
    </>
  );
}

export default App;
