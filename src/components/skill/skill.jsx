import React from 'react';
import './skill.css';

const skillsData = [
    { name: "html/css", level: 100, image: "/assets/icons/html.png" },
    { name: "Sites", level: 100, image: "/assets/icons/site.png" },
    { name: "Sass", level: 100, image: "/assets/icons/sass.png" },
    { name: "SEO", level: 100, image: "/assets/icons/seo.png" },
    { name: "JavaScript", level: 80, image: "/assets/icons/js.png" },
    { name: "react", level: 80, image: "/assets/icons/react.png" },
    { name: "redux", level: 60, image: "/assets/icons/redux.png" },
    { name: "debug", level: 40, image: "/assets/icons/debug.png" },
    { name: "gestion de projet", level: 30, image: "/assets/icons/gestion.png" }
    // Ajoutez les données pour les 7 compétences supplémentaires ici
];

const Skill = ({ name, level, image }) => {
    const skillLevelClassName = level > 70 ? 'high-level' : '';

    return (
        <div className="skill">
            <img src={process.env.PUBLIC_URL + image} alt="Skill Icon" />
            <div className="skill-name">{name}</div>
            <div className="skill-bar">
                <div className={`skill-level ${skillLevelClassName}`} style={{ width: `${level}%` }}></div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="skills">
            {skillsData.map((skill, index) => (
                <Skill
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    image={skill.image}
                />
            ))}
        </div>
    );
};

export default Skills;


