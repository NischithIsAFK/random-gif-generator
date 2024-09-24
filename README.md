### Random GIF generator

# Introduction

A full stack project which generates a random gif everytime a button is clicked using React in frontend. AWS Lambda, API Gateway in the backend

# Working

- Used a public free API from GIPHY developers website. Made use of API keys from the website to access the APIs
- Sent Access-Control-Allow-Headers which enables CORS where the frontend can use the API.
- Made use of axios in the backend to consume external API
- In frontend made use of React wherein react hooks like useState was used so that whenever a gif is generated it will change the state to that GIF.

# Steps to run

### For backend

- `cd gif-generator` to switch to backend folder
- `sam build` to build the project if you have aws account configured. or else run `aws configure` beforehand.
- `sam deploy --guided` to deploy the backend using Cloudformation

### For Frontend

- `cd gif-generator-frontend` to switch to frontend
- use your own API url from the API gateway
- `npm install` to install dependencies
- `npm run dev` to run the frontend
