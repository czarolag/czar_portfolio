import React from 'react';
import { Form } from './Form'

// placeholder, actual is :Github, LinkedIn, Email
import { nav_icons } from '../assets/img'


export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <h1>Contact Me</h1>
        <p>Need to get in touch or have any questions? Contact me at any of the following sources.</p>
        <span className="contact-text">
          <div className="contact-icon">
            <a href="https://www.hackerrank.com/profile/czarolag" target="_blank" rel="noopener noreferrer" aria-label="Social Link 1">
              <img src={nav_icons.navIcon1} alt="Social Icon 1" />
            </a>
            <a href="https://leetcode.com/u/colague3/" target="_blank" rel="noopener noreferrer" aria-label="Social Link 2">
              <img src={nav_icons.navIcon2} alt="Social Icon 2" />
            </a>
            <a href="https://github.com/czarolag" target="_blank" rel="noopener noreferrer" aria-label="Social Link 3">
              <img src={nav_icons.navIcon3} alt="Social Icon 3" />
            </a>
          </div>
        </span>

        <Form />

      </div>
    </div>
  );
}
