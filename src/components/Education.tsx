import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h3 className="section-title">Education</h3>
        <div className="education-flex">
          <div className="education-box">
            <h4>Masters in Business Administration (MBA)</h4>
            <h5>W. P. Carey School of Business, Arizona State University | 2025 – 2027</h5>
            <p>
              Transitioning to take on strategic leadership, strengthening my skills in strategy, market analysis, and digital transformation through hands-on projects and leadership-focused work.
            </p>
          </div>
          <div className="education-box">
            <h4>Post Graduate Diploma in Business Analytics (Work Integrated)</h4>
            <h5>BITS Pilani | 2022 – 2023</h5>
            <p>
              Advanced studies in statistical modeling, predictive analytics, and data-driven decision-making to optimize product performance and user insights.
            </p>
          </div>
          <div className="education-box">
            <h4>Bachelor of Engineering in Computer Science</h4>
            <h5>Savitribai Phule Pune University | 2016 – 2020</h5>
            <p>
              Foundation in software architecture, algorithms, and system design, enabling a technical approach to product development and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
