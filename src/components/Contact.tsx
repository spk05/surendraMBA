import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="http://www.linkedin.com/in/surendrap2"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                linkedin.com/in/surendrap2
              </a>
            </p>
            <p>
              <a href="mailto:spatha31@asu.edu" data-cursor="disable">
                Email — spatha31@asu.edu
              </a>
            </p>
            <p>Phone — +1(480)265-7584</p>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Surendra Pathak</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
