import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "./list";

const timeLineColor = "#60a5fa";

const Work = () => {
  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Work Experience 📌 🏆 🥇 💯
      </h1>
      <VerticalTimeline>
        {workExperiences.map((we, idx) => {
          return (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--work"
              date={we.date}
              dateClassName="xl:text-gray-900"
              contentStyle={{ background: timeLineColor, color: "#fff" }}
              contentArrowStyle={{
                borderRight: `7px solid  ${timeLineColor}`,
              }}
              iconStyle={{ background: timeLineColor, color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title underline">
                {we.jobTitle}
              </h3>
              <span className="text-sm text-white inline-block">
                @ {we.companyName}
              </span>
              <p className="text-xs text-white underline">Responsibilities</p>
              <ul className="list-disc px-3">
                {we.responsibilities.map((a) => (
                  <li key={a} className="leading-relaxed text-sm capitalize">
                    {a}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Work;
