import React from 'react';

const serviceKey = process.env.EMAILJS_SERVICE_KEY;
const templateKey = process.env.EMAILJS_TEMPLATE_KEY;

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: '', 
      name: '', 
      email: '' 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="test-mailing" onSubmit={this.handleSubmit}>
        <h1>Send me an email!</h1>
        
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Your name"
            required
            value={this.state.name}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="your.email@example.com"
            required
            value={this.state.email}
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            onChange={this.handleChange}
            placeholder="Send me any questions or comments!"
            required
            value={this.state.message}
            style={{ width: '100%', height: '150px' }}
          />
        </div>

        <div className="g-recaptcha" data-sitekey="6LepKk8qAAAAAJWUHFoIKgUf1bqEEWi_lrq2FOOm"></div>

        <button type="submit" className="btn btn--submit">Submit</button>
      </form>
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    
    // Ensure reCAPTCHA is ready before executing
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LepKk8qAAAAAJWUHFoIKgUf1bqEEWi_lrq2FOOm', { action: 'submit' })
        .then((token) => {
          const templateId = templateKey;
          
          this.sendMessage(templateId, { 
            message_html: this.state.message, 
            from_name: this.state.name, 
            reply_to: this.state.email,
            'g-recaptcha-response': token // Include the reCAPTCHA token
          });
        })
        .catch(err => console.error('Error executing reCAPTCHA:', err));
    });
  }

  sendMessage(templateId, variables) {
    window.emailjs.send(
      serviceKey, 
      templateId,
      variables
    )
    .then(res => {
      console.log('Email successfully sent!');
      // Clear form after submission
      this.setState({ message: '', name: '', email: '' });
      window.grecaptcha.reset();
    })
    .catch(err => console.error('An error occurred: ', err));
  }
}
