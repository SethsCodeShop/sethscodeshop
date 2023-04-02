import React from 'react';
import WithAuthenticationRequired from './withAuthenticationRequired';

const TechnicalProficiency = () => {
  return (
    <section>
      <h2 className="mb-3">Technical Proficiency</h2>
      <h3 className="mb-2">Languages:</h3>
      <p>Proficient in: C#, JavaScript(AJAX, JSON, JQUERY), T-SQL, React, Swift 5.7.2, Bootstrap 3.4.1-5.3</p>
      <h3 className="mb-2">Technologies/Frameworks:</h3>
      <p>
        Salesforce, Vivun, .NET Framework 3.5/4.0+, Web API, .Net Core 3.2, .Net 6.0
        Azure DevOps, GIT, Postman, Jira, TFS, SAML, OAuth 2.0, OIDC
      </p>
      <h3 className="mb-2">Certifications</h3>
      <p>Google Cloud Fundamentals: Core Infrastructure</p>
    </section>
  );
};

export default WithAuthenticationRequired(TechnicalProficiency);