import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "../data";

import "../styles/Experience.css";

import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.09 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`experience ${inView ? "visible" : ""}`}
    >
      <h3 className="experience-heading">{`{ Experience }`}</h3>
      <menu>
        {EXPERIENCE.map((experience) => {
          return (
            <ExperienceItem
              key={experience.title}
              title={experience.title}
              image={experience.image}
              company={experience.company}
              description={experience.description}
              duration={experience.duration}
            />
          );
        })}
      </menu>
    </section>
  );
}
