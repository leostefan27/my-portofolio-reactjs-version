import React from "react";
import { useState, useEffect } from "react";

const NAME_REGEX = /^[a-zA-Z- ]+$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ContactComponent = () => {
  // Name
  const [name, setName] = useState();
  const [nameValid, setNameValid] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  useEffect(() => {
    setNameValid(NAME_REGEX.test(name));
  }, [name]);
  // Email
  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(email));
  }, [email]);
  //   Message
  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  useEffect(() => {
    setMessageValid(message.length < 10000);
  }, [message]);

  return (
    <section id="contact-section">
      <div className="container">
        <div className="contact">
          <p>
            <span>Are you in need of a new website or looking to revamp your current
            online presence? Look no further. I am a skilled web developer with
            experience in creating custom, user-friendly websites for businesses
            of all sizes. From design to development, I can help bring your
            brand to life online and drive more traffic and conversions to your
            site. Let's work together to create a website that exceeds your
            expectations and sets you apart from the competition. Contact me
            today to discuss your project and see how I can help take your
            business to the next level.
            </span>
            <span>
                Contact me right now
            </span>
          </p>

          <form>
            {/* Name form group */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name*:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
                aria-invalid={name ? "false" : "true"}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
              {!nameValid && nameFocus && (
                <p className="input-rules">Please insert a valid name!</p>
              )}
            </div>
            {/* Email form group */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Email*:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex: johndoe@test.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoCapitalize="off"
                autoComplete="on"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              {!emailValid && emailFocus && (
                <p className="input-rules">
                  Please insert a valid email address!
                </p>
              )}
            </div>
            {/* Message form group */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message*:
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={message ? "false" : "true"}
                onFocus={() => setMessageFocus(true)}
                onBlur={() => setMessageFocus(false)}
              />
              {!messageValid && messageFocus && (
                <p className="input-rules">Too many characters!</p>
              )}
            </div>
            {/* Submit */}
            <div className="form-group">
              <input
                disabled={
                  !nameValid || !emailValid || !messageValid
                }
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
