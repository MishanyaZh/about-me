import styled from '@emotion/styled';

export const MainInfoBox = styled.div`
  margin: 16px 10px 10px 10px;
  padding: 20px;
  width: 100%;
  max-width: 540px;
  box-sizing: border-box;

  transition: background-color 0.35s ease-out, box-shadow 0.35s ease-out;
  border-radius: 5px;
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-1);
  h1,
  h2 {
    padding-bottom: 6px;
    color: var(--text-color-white);
    text-shadow: var(--shadow-neon);
  }

  h1 {
    font-size: clamp(1.55rem, 2.8vw, 2.15rem);
    line-height: 1.2;
    animation: var(--animation-neonFlicker);
  }

  h2 {
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.35;
    font-weight: 600;
  }

  @media (max-width: 766px) {
    margin: 12px 0 8px 0;
    padding: 16px;
    max-width: 460px;
  }
`;

export const Summary = styled.div`
  margin: 12px auto 0;
  padding: 8px 10px;
  max-width: 460px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: justify;
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.5vw, 1.02rem);

  @media (max-width: 766px) {
    width: 100%;
    max-width: 450px;
    padding: 8px;
  }
`;

export const SummarySkills = styled.span`
  color: var(--text-acc);
`;

export const Img = styled.img`
  width: min(100%, 300px);
  height: auto;
  margin: 0 auto;
  margin-top: 12px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-1);
`;
