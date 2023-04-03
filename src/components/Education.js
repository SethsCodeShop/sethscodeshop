import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import WithAuthenticationRequired from './withAuthenticationRequired';

const Education = () => {
  const [education, setEducation] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getEducation = async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/education`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': true
        }
      });
      setEducation(response.data);
    };

    getEducation();
  }, []);

  return (
    <section>
      <h2 className="mb-3">Education</h2>
      {education.map(edu => (
        <div>
          <p>
            <strong>{edu.Degree}</strong> - {edu.School}
          </p>
          <p>Specialization in {edu.Specialization}</p>
        </div>
      ))}
    </section>
  );
};

export default WithAuthenticationRequired(Education);