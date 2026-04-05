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
            <div className="career-info-desc">
              <p>
                <strong>Role:</strong> Ensuring product excellence by translating player behavior and system performance into actionable quality improvements.
              </p>
              <p>
                At Ubisoft, I partnered across product, design, and engineering to analyze player engagement and enhance digital experience across platforms.
              </p>
              <p>
                I built structured testing and defect tracking systems that accelerated release cycles, and led process improvements that increased sprint efficiency and strengthened product quality.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Process Analyst</h4>
                <h5>Dassault Systèmes</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <div className="career-info-desc">
              <p>
                <strong>Role:</strong> Acting as the bridge between business stakeholders and technical teams to deliver scalable, data-driven product solutions.
              </p>
              <p>
                At Dassault Systèmes, I led product strategy and execution for a global HR platform, aligning business goals with user adoption and delivering ~$2M in annual cost savings.
              </p>
              <p>
                By mapping workflows and redesigning tracking systems, I improved planning efficiency by 30% and reduced platform issues by 80% through data-driven enhancements.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Strategy, Graduate Assistant</h4>
                <h5>ASU Learning Enterprise</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <div className="career-info-desc">
              <p>
                <strong>Role:</strong> Driving digital transformation by translating user needs and market insights into scalable, AI-enabled learning solutions.
              </p>
              <p>
                At ASU Learning Enterprise, I modernize how education is delivered by rebuilding legacy simulations into responsive, AI-powered dashboards, improving accessibility for 100+ students and eliminating outdated dependencies.
              </p>
              <p>
                I also translate market insights into action. Through competitive analysis and demand research, I identified new program opportunities and revenue pathways, combining user-centered thinking with emerging technology to drive scalable innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
