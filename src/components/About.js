import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container mt-5">
        <div className='row'>
            <div className="col-md-6">
                <div className="card">
                    <h2 className="card-title text-center mt-4">About This Application</h2>
                    <div className="card-body">
                    <p>
                        This application is a personal portfolio website showcasing my software engineering skills, experience, and education. It is built using React, Next.js APIs, Bootstrap 4.6.2, Auth0 for authentication, and hosted on Vercel.
                    </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <h2 className="card-title text-center mt-4">Tech Stack Details</h2>
                    <div className="card-body">
                        <ul>
                            <li>
                            <strong>React:</strong> A popular JavaScript library for building user interfaces. It allows us to create reusable UI components and manage the application's state efficiently.
                            </li>
                            <li>
                            <strong>Next.js:</strong> A powerful framework for building server-rendered React applications. It provides features like static site generation, server-side rendering, and API routes, which enable us to create a high-performance web app.
                            </li>
                            <li>
                            <strong>Bootstrap 4.6.2:</strong> A widely-used CSS framework that helps us create responsive, mobile-first designs. It includes pre-built components, utilities, and a responsive grid system, making it easy to create a professional-looking website with minimal effort.
                            </li>
                            <li>
                            <strong>Vercel:</strong> A platform for deploying, scaling, and monitoring frontend applications and serverless functions. It provides a seamless workflow to build and deploy web applications, making it easy to ensure optimal performance and reliability.
                            </li>
                            <li>
                            <strong>Auth0:</strong> A flexible and secure authentication and authorization platform. It provides a set of tools and services to implement authentication and authorization for web, mobile, and server applications, allowing us to manage user access with ease.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
