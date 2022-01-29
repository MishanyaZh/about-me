import { EductionBox } from './Education.styled';
const Education = () => {
  return (
    <EductionBox>
      <ul>
        <h3>EDUCATION</h3>
        <li>
          <h5>IT School "GoIT"</h5>
          <span>(January 2021 - January 2022)</span>
          <p>Full Stack Developer (JS, React.js, Node.js, Html, CSS)</p>
        </li>
        <li>
          <h5>"Eduatut Policealna Szkola Zawodowa"</h5>
          <span>(26.06.2020)</span>
          <p>IT specialist</p>
        </li>
        <li>
          <h5>Academy of language</h5>
          <span>(05.01.2020)</span>
          <p>English language course</p>
        </li>
        <li>
          <h5>Course "Graphic designer"</h5>
          <span>(17.02.2019)</span>
          <p>(Photoshop, Corel)</p>
        </li>
        <li>
          <h5>
            Cherkassy Branch of Private Higher Education Establishment "European
            University"
          </h5>
          <span>(2006 - 2011)</span>
          <p>Finance</p>
        </li>
      </ul>
    </EductionBox>
  );
};

export default Education;
