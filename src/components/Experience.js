import React from 'react';
import WithAuthenticationRequired from './withAuthenticationRequired';

const Experience = () => {
  return (
    <section>
      <h2 className="mb-3">Experience</h2>
      {/* Add each job position as a separate div with the "mb-4" class for spacing */}
    </section>
  );
};

export default WithAuthenticationRequired(Experience);
