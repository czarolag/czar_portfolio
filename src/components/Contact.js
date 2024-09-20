import React from 'react';

export const Contact = () => {
  return (
    <div className="about-me-container">
      <div className="profile-section">
        <img 
          src="your-profile-picture-url.jpg" 
          alt="Profile" 
          className="profile-picture"
        />
        <h1>About Me</h1>
        <p className="bio">
          Temp
          <br/><br/>
          Temp
        </p>
      </div>
      
      <div className="contact-section">
        <h2>Contact Me</h2>
        <ul>
          <li>
            <a href="https://github.com/czarolag" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cesar-olague-225769214/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:czarolag@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
