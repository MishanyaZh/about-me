// import { TECHNICAL_SKILLS } from '../../json/TECHNICAL-SKILLS';

const SkillsList = ({ SKILLS, title }) => {
  return (
    <div>
      <ul>
        <h3>{title}</h3>
        {SKILLS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
