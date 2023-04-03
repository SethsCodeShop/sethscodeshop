import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import WithAuthenticationRequired from './withAuthenticationRequired';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getExperience = async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/profileInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': true
        }
      });
      setExperience(response.data);
    };

    getExperience();
  }, [getAccessTokenSilently]);

  return (
    <section>
      <h2 className="mb-3">Experience</h2>
      {experience.map(job => (
        <div className="mb-4" key={job.Company}>
          <h4>{job.Company} – {job.Title}</h4>
          <p><strong>{job.StartDate} – {job.EndDate}</strong></p>
          <ul>
            {job.Responsibilities.map(responsibility => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WithAuthenticationRequired(Experience);