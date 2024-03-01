import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <div class="contact-form-container">
        <h2>Contact Us</h2>
        <form id="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact