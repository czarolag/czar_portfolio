import React from 'react';
import { Form } from './Form';

// Placeholder, actual is: Github, LinkedIn, Email
import { nav_icons } from '../assets/img';

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <h1>Contact Me</h1>
        <p>Need to get in touch or have any questions? Contact me through the following sources:</p>

        {/* Contact Icons */}
        <div className="contact-icon-container">
          <a href="https://www.hackerrank.com/profile/czarolag" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
            <img src={nav_icons.navIcon1} alt="HackerRank Icon" />
          </a>
          <a href="https://leetcode.com/u/colague3/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <img src={nav_icons.navIcon2} alt="LeetCode Icon" />
          </a>
          <a href="https://github.com/czarolag" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={nav_icons.navIcon3} alt="GitHub Icon" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
};
