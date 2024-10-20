import styled from '@emotion/styled';

export const MainInfoBox = styled.div`
  margin: 10px;
  padding: 10px 10px 10px 10px;

  transition: all 0.5s ease-out;
  border-radius: 5px;
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-1);
  h1,
  h2 {
    padding-bottom: 5px;
    color: var(--text-color-white);
    text-shadow: var(--shadow-neon);
    animation: var(--animation-neonFlicker);
  }
`;

export const Summary = styled.div`
  margin-top: 10px;
  padding: 5px;
  max-width: 450px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-1);
  text-align: justify;
  @media (max-width: 766px) {
    min-width: 250px;
    max-width: 450px;
  }
`;

export const SummarySkills = styled.span`
  color: var(--text-acc);
`;

export const Img = styled.img`
  width: 250px;
  height: 325px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-1);
`;
