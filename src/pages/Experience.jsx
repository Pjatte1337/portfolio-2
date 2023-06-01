import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#cc8b65">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#cc8b65", color: "#100c0d" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Noroff - School of Technology and Media
          </h3>
          <p>starting 2023</p>
          <p>Back-end Development</p>
          <p>Vocational school Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#cc8b65", color: "#100c0d" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">TrønderTaxi AS</h3>
          <p>2021 - Present</p>
          <p>Customer service / IT</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#cc8b65", color: "#100c0d" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Noroff - School of Technology and Media
          </h3>
          <p>2021 - 2023</p>
          <p>Front-end Development</p>
          <p>Vocational school Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#cc8b65", color: "#100c0d" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kontrex AS</h3>
          <p>2016 - 2021</p>
          <p>Sales manager</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#cc8b65", color: "#100c0d" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Consort AS</h3>
          <p>2011 - 2016</p>
          <p>Sales consultant</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#cc8b65", color: "#100c0d" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Strinda videregående skole
          </h3>
          <p>2009 - 2011</p>
          <p>Certificate Of Apprenticeship</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
