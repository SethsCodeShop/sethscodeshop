import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Summary = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const getSummary = async () => {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/summary`, {
        headers: {
          'Access-Control-Allow-Origin': true
        }
      });
      setSummary(response.data);
    };

    getSummary();
  });

  return (
    <section>
      <h2 className="mb-3">Summary</h2>
      <p>{summary}</p>
    </section>
  );
};

export default Summary;
