import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";



function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="Starting 2023"
                iconStyle={{background: "#3e497a", color:"#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> Noroff - School of Technology and Media </h3>
                    <p>Back-end Development</p>
                    <p>Vocational school Diplom</p>
                </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2021 - 2023"
                iconStyle={{background: "#3e497a", color:"#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> Noroff - School of Technology and Media </h3>
                    <p>Front-end Development</p>
                    <p>Vocational school Diplom</p>
                </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2016 - 2021"
                iconStyle={{background: "#3e497a", color:"#fff"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Kontrex AS </h3>
                    <p>Sales manager</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2011 - 2016"
                iconStyle={{background: "#3e497a", color:"#fff"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Consort AS </h3>
                    <p>Sales consultant</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2009 - 2011"
                iconStyle={{background: "#3e497a", color:"#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> Strinda videregående skole </h3>
                    <p>Certificate Of Apprenticeship</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;