import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MockedProvider } from "@apollo/react-testing";
import { GET_BOOKS } from "./query.js";
import axios from 'axios';

function MockedApp() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios.get('https://64241e5a47401740433376dd.mockapi.io/crudData')
      .then((response) => {
         setApiData(response.data);
      });
  }, []);

  if (!apiData) {
    return <p>Loading...</p>;
  }

  const mocks = [
    {
      request: {
        query: GET_BOOKS,
      },
      result: {
        data: {
          books: apiData
        },
      },
    },
  ];

  return (
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MockedApp />);
