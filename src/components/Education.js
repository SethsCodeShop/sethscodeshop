import React from 'react';
import WithAuthenticationRequired from './withAuthenticationRequired';


const Education = () => {
  return (
    <section>
      <h2 className="mb-3">Education</h2>
      <p>
        <strong>B.S. in Management Information Systems</strong> - Oklahoma State
        University
      </p>
      <p>Specialization in Information Assurance</p>
    </section>
  );
};

export default WithAuthenticationRequired(Education);