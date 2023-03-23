const Experience = [
    {
        "Company": "Okta",
        "Title": "Associate CIAM Specialist (Sales/Solutions Engineer)",
        "StartDate": new Date(04/2022),
        "EndDate": new Date(02/2023),
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
        "StartDate": new Date(04/2021),
        "EndDate": new Date(04/2022),
        "Responsibilities": [
            "Implemented, designed, built, and tested new application feature requests and maintained business applications/infrastructure for Automated Clearing House (ACH) and Point Of Sale (POS).",
            "Worked with a team of software engineers using AGILE/SCRUM principles to update key POS software to use Multi Factor Authentication (MFA) from Okta, enhancing overall transaction security.",
            "Created User Interface (UI) and User Experience (UX) for updating and resetting Okta MFA factors."
        ]
    },
    {
        "Company": "Carter Healthcare",
        "Title": "Software Engineer",
        "StartDate": new Date(02/2019),
        "EndDate": new Date(04/2021),
        "Responsibilities": [
            "Led a team to create and automate a Medicare patient processing system and helped engineer a new system that accelerated communication between different business units.",
            "Built an integration authentication process using Active Directory/LDAP.",
            "Utilized .Net framework to create a solution that manages user web application sessions and access based on Active Directory groups.",
            "Provided mobile application support utilizing Swift front end design with .Net Web API back end technology."
        ]
    }
]

import { withApiAuthRequired } from '@auth0/nextjs-auth0';

const handler = async (req, res) => {
  return res.status(200).json(Experience);
};

export default withApiAuthRequired(handler);