import { useState } from "react";
import { MdArrowForward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const content = (
    <div
      className="work-image-in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsVideo(false)}
    >
      <img src={props.image} alt={props.alt} />
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      {props.link && (
        <div className="work-link">
          <MdArrowForward style={{ transform: "rotate(-45deg)" }} />
        </div>
      )}
    </div>
  );

  return (
    <div className="work-image">
      {props.link ? (
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
          title={`Visit ${props.alt || "project website"}`}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default WorkImage;
