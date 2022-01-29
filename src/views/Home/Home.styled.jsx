import styled from '@emotion/styled';

export const FrontPage = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  @media (max-width: 766px) {
    flex-direction: column;
  }
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
