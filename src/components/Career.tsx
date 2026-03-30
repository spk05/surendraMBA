import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Assurance Specialist</h4>
                <h5>Ubisoft Entertainment</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Collaborated with Product and Engineering teams for global gaming 
              title launches. Structured test cases and defect logs to 
              accelerate release validation cycles across console and PC.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Process Analyst</h4>
                <h5>Dassault Systèmes</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              Led end-to-end Product Development Lifecycle of a global HR 
              digital platform, delivering ~$2M USD in annual cost savings. 
              Reduced user-reported issues by 80% through behavioral analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Strategy, Graduate Assistant</h4>
                <h5>ASU Learning Enterprise</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Diagnosed UX limitations in legacy simulations and engineered 
              modern, responsive web dashboards using Claude AI. Conducted 
              market research to inform leadership decisions on new offerings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
