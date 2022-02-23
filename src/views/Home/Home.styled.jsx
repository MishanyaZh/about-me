import styled from '@emotion/styled';

export const FrontPage = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  margin: 0 5px 0 5px;

  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const NavLinkBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const TechnicalSkills = styled.div`
  min-width: 195px;
  order: -1;
  border-radius: 5px;
  padding: 10px;
  text-transform: uppercase;
  box-shadow: var(--box-shadow-wrrap-1);
  background: var(--color-theme-card);
  transition: all 0.5s ease-out;

  @media (max-width: 766px) {
    order: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SoftSkills = styled.div`
  min-width: 195px;
  height: 284px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.5s ease-out;
  text-transform: uppercase;
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-wrrap-1);

  @media (max-width: 766px) {
    /* flex-direction: row; */
    justify-content: space-around;
    margin-bottom: 10px;
  }
`;

export const EducationSkills = styled.div`
  max-width: 500px;
  padding: 10px;
  flex: 1;

  transition: all 0.5s ease-out;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-1);
  background: var(--color-theme-card);
`;
export const ExperienceSkills = styled.div`
  max-width: 500px;
  padding: 10px;
  flex: 1;

  transition: all 0.5s ease-out;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-1);
  background: var(--color-theme-card);
  @media (max-width: 766px) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const DownPage = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin: 0 10px 10px 10px;

  @media (max-width: 766px) {
    flex-direction: column;
    align-items: center;
  }
`;
