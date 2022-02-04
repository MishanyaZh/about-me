import styled from '@emotion/styled';

export const FrontPage = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;

  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const PortfolioButton = styled.button`
  display: block;
  margin: 0 auto;
`;

export const TechnicalSkills = styled.div`
  order: -1;
  @media (max-width: 766px) {
    order: 0;
  }
`;

export const SoftSkills = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 766px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const EducationSkills = styled.div`
  max-width: 500px;
  padding: 10px;
  flex: 1;
`;
export const ExperienceSkills = styled.div`
  max-width: 500px;
  padding: 10px;
  flex: 1;
`;

export const DownPage = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  @media (max-width: 766px) {
    flex-direction: column;
  }
`;
