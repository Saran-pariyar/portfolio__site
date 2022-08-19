import React from "react";
import { FaHtml5, FaCss3, FaWordpress, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiTailwindcss,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import "./skillsCard.css";

const SkillsCard = () => {
  //storing skills in the array so that we can iterate over it and get data from it

  const skills = [
    { icon: FaHtml5, title: "HTML5" },
    { icon: FaCss3, title: "CSS3" },
    { icon: SiJavascript, title: "JavaScript" },
    { icon: FaReact, title: "ReactJS" },
    { icon: SiBootstrap, title: "Bootstrap" },
    { icon: SiGithub, title: "Git & Github" },
    { icon: SiTailwindcss, title: "TailwindCSS" },
    { icon: SiPhp, title: "PHP" },
    { icon: SiMysql, title: "MySQL" },
    { icon: FaWordpress, title: "WordPress" },
  ];

  return (
    <section className="skills-section">
      <p className="skill-section-title">My skills:</p>

      <section className="skill-card-section">
        {skills.map((skill) => {
          const ComponentIcon = skill.icon;

          //iterating over all the skills from that skills array
          return (
            <section className="skill-card" key={skill.title}>
              <ComponentIcon className="skill-icon" />
              <p className="skill-title">{skill.title}</p>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default SkillsCard;
