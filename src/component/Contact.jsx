import React from 'react'

const Contact = () => {
  return (
   <>
   <div  className='container'>
    <p  className='custom-contact-text'>Contact Us</p>
   </div>



    <div className="container mt-5 mb-5">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d85326.576651073!2d77.092979!3d28.6723666!3m2!1i1024!2i768!4f13.1!2m1!1sKD-3%2C%20Third%20Floor%2C%20near%20Kohat%20Enclave%20metro%20station%2C%20Delhi%20-%20110034!5e1!3m2!1sen!2sin!4v1756961717440!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>




       <section
      className="contact-section"
    //   style={{ backgroundImage: `url(assets/images/)` }}
    >
      <div className="contact-container">
        <h2 className="contact-title">Send Us Your Questions!</h2>
        <p className="contact-subtitle">
          We’ll get back to you within two days.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="fullEmail">Full Email *</label>
              <input type="email" id="fullEmail" name="fullEmail" required />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="fullMessage">Full Message *</label>
            <textarea id="fullMessage" name="fullMessage" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
   
   </>
  )
}

export default Contact