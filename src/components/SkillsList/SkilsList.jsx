import React from 'react';
const SkillsList = ({ SKILLS, title, type }) => {
  return (
    <ul>
      <h3>{title}</h3>
      {type !== 'DownPage' &&
        SKILLS.map((item, index) => (
          <li key={index}>
            <h5>{item}</h5>
          </li>
        ))}
      {type === 'DownPage' &&
        SKILLS.map((item, index) => (
          <li key={index}>
            <h5>{item.subtitle}</h5>
            <span>{item.date}</span>
            <ul>
              {item.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default SkillsList;
