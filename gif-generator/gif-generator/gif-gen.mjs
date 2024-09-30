import axios from "axios";

export const handler = async (event) => {
  const { tag } = JSON.parse(event.body);
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${tag}`;

  try {
    const result = await axios.get(apiUrl);

    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      },
      body: JSON.stringify({
        apiurl: result.data.data.images.original.url,
      }),
    };

    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error GIF",
        error: error.message,
      }),
    };
  }
};
