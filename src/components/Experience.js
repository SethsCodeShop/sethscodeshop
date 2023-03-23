import React from 'react';
import WithAuthenticationRequired from './withAuthenticationRequired';

const Experience = () => {
  return (
    <section>
      <h2 className="mb-3">Experience</h2>
      <div className="mb-4">
        <h4>Okta – Associate CIAM Specialist</h4>
        <p><strong>May 2022 – February 2023</strong></p>
        <ul>
          <li>Advised clients on design and architecture to align with their specific business needs.</li>
          <li>Conducted technical assessments to determine best fit for Auth0 product integration.</li>
          <li>Distilled and communicated customer needs and product feedback to Product Management, Engineering, Marketing, and Sales.</li>
          <li>Crafted unique proof of concepts tailored to customers' specific needs based on their existing infrastructure.</li>
          <li>Led demonstrations for prospective customers to understand their requirements and communicate the business value of meeting their needs with Auth0.</li>
          <li>Developed custom web applications with REST APIs using the .Net framework that utilized the Auth0 product to demonstrate different key features of the Auth0 platform.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h4>Heartland Payment Services – Software Engineer</h4>
        <p><strong>May 2021 – May 2022</strong></p>
        <ul>
          <li>Implemented, designed, built, and tested new application feature requests and maintained business applications/infrastructure for Automated Clearing House (ACH) and Point Of Sale (POS).</li>
          <li>Worked with a team of software engineers using AGILE/SCRUM principles to update key POS software to use Multi Factor Authentication (MFA) from Okta, enhancing overall transaction security.</li>
          <li>Created User Interface (UI) and User Experience (UX) for updating and resetting Okta MFA factors.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h4>Carter Healthcare – Software Engineer</h4>
        <p><strong>February 2019 – May 2021</strong></p>
        <ul>
          <li>Led a team to create and automate a Medicare patient processing system and helped engineer a new system that accelerated communication between different business units.</li>
          <li>Built an integration authentication process using Active Directory/LDAP.</li>
          <li>Utilized .Net framework to create a solution that manages user web application sessions and access based on Active Directory groups.</li>
          <li>Provided mobile application support utilizing Swift front end design with .Net Web API back end technology.</li>
        </ul>
      </div>
    </section>
  );
};

export default WithAuthenticationRequired(Experience);
