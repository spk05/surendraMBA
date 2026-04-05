import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "HR Digital Platform",
    category: "Dassault Systèmes HR Digital Transformation",
    description: [
      "How I did it: Blended stakeholder insight, regulatory alignment, and product execution to unify fragmented HR systems.",
      "Led the end-to-end rollout of a global HR platform across France, North America, and India by translating regional requirements into a single, scalable solution. Conducted structured stakeholder interviews to capture business needs, while embedding country-specific compliance and legal standards into the design.",
      "I centralized workflows into one secure web application, implementing role-based access controls and governance frameworks to ensure data integrity. By aligning execution with defined business goals and tracking measurable outcomes, the platform reduced manual effort and contributed to significant annual cost savings."
    ],
    tools: "Stakeholder Management, Business Needs Analysis, Cross-functional Collaboration, Program Strategy",
    image: "/images/hr_platform.png",
  },
  {
    title: "Simulation Modernization",
    category: "ASU Learning Enterprise Digital Experience Transformation",
    description: [
      "How I did it: Combined problem diagnosis, rapid prototyping, and AI-assisted development to reimagine legacy systems.",
      "Identified critical usability and accessibility gaps in legacy Visual Basic simulations and rearchitected them into modern, responsive web dashboards. Leveraged Claude AI to accelerate code conversion from Visual Basic to HTML, dramatically reducing redevelopment time.",
      "The result was a streamlined, browser-based experience that improved usability and scalability, directly enhancing the learning experience for 100+ students while eliminating dependency on outdated software."
    ],
    tools: "Problem Structuring, UX Strategy, AI Enablement, Data-driven Decision Making",
    image: "/images/sim_modernization.png",
  },
  {
    title: "Game titles",
    category: "Quality Assurance - Ubisoft",
    description: [
      "How I did it: Instituted structured quality systems and proactive risk identification to ensure flawless global releases.",
      "Played a key role in the pre-launch quality assurance of major titles including Just Dance 2021 and Riders Republic, identifying and escalating 100+ critical issues prior to release. Delivered concise quality reports to senior leadership, enabling informed go-live decisions.",
      "To scale impact, I developed standardized testing frameworks and onboarding documentation, and trained new team members to ensure consistency in quality benchmarks. This approach improved release readiness, accelerated onboarding, and strengthened overall product reliability."
    ],
    tools: "Test Planning, Defect Tracking, Cross-functional Coordination, Release Support",
    image: "/images/game_titles.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-description">
                          {project.description.map((paragraph, i) => (
                            <p key={i}>
                              {i === 0 ? <strong>{paragraph}</strong> : paragraph}
                            </p>
                          ))}
                        </div>
                        <div className="carousel-tools">
                          <span className="tools-label">Exposure</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
