import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import WithAuthenticationRequired from './withAuthenticationRequired';

const experience = [
  {
      "Company": "Okta",
      "Title": "Associate CIAM Specialist (Sales/Solutions Engineer)",
      "StartDate": "04/2022",
      "EndDate": "02/2023",
      "Responsibilities": [
          "Advised clients on design and architecture to align with their specific business needs.",
          "Conducted technical assessments to determine best fit for Auth0 product integration.",
          "Distilled and communicated customer needs and product feedback to Product Management, Engineering, Marketing, and Sales.",
          "Crafted unique proof of concepts tailored to customers' specific needs based on their existing infrastructure.",
          "Led demonstrations for prospective customers to understand their requirements and communicate the business value of meeting their needs with Auth0.",
          "Developed custom web applications with REST APIs using the .Net framework that utilized the Auth0 product to demonstrate different key features of the Auth0 platform."
      ]
  },
  {
      "Company": "Heartland Payment Systems",
      "Title": "Software Engineer",
      "StartDate": "04/2021",
      "EndDate": "04/2022",
      "Responsibilities": [
          "Implemented, designed, built, and tested new application feature requests and maintained business applications/infrastructure for Automated Clearing House (ACH) and Point Of Sale (POS).",
          "Worked with a team of software engineers using AGILE/SCRUM principles to update key POS software to use Multi Factor Authentication (MFA) from Okta, enhancing overall transaction security.",
          "Created User Interface (UI) and User Experience (UX) for updating and resetting Okta MFA factors."
      ]
  },
  {
      "Company": "Carter Healthcare",
      "Title": "Software Engineer",
      "StartDate": "02/2019",
      "EndDate": "04/2021",
      "Responsibilities": [
          "Led a team to create and automate a Medicare patient processing system and helped engineer a new system that accelerated communication between different business units.",
          "Built an integration authentication process using Active Directory/LDAP.",
          "Utilized .Net framework to create a solution that manages user web application sessions and access based on Active Directory groups.",
          "Provided mobile application support utilizing Swift front end design with .Net Web API back end technology."
      ]
  }
]

const Experience = () => {
  // const [experience, setExperience] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   const getExperience = async () => {
  //     const token = await getAccessTokenSilently();
  //     const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/profileInfo`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       }
  //     });
  //     setExperience(response.data);
  //   };

  //   getExperience();
  // }, [getAccessTokenSilently]);

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
