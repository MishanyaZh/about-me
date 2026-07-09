import styled from '@emotion/styled';

export const FrontPage = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 0.9fr) minmax(0, 1.2fr) minmax(
      240px,
      0.9fr
    );
  grid-template-areas: 'technical main soft';
  align-items: stretch;
  justify-items: center;

  gap: 14px;
  margin: 12px 12px 0;
  text-align: center;

  animation: fadeUp 0.75s ease both;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 766px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'main'
      'technical'
      'soft';
    gap: 12px;
    margin: 10px 0 0;
    padding: 0 12px;
    box-sizing: border-box;
  }
`;

export const NavLinkBox = styled.div`
  margin: 18px 10px 12px;
  display: flex;
  justify-content: center;
`;

export const TechnicalSkills = styled.div`
  min-width: 195px;
  box-sizing: border-box;
  grid-area: technical;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 20px 14px;
  border-radius: 18px;
  text-transform: uppercase;
  border: 1px solid var(--surface-border);
  backdrop-filter: blur(12px);
  box-shadow: var(--box-shadow-1);
  background: var(--color-theme-card);
  transition: transform 0.22s ease, background-color 0.35s ease-out,
    box-shadow 0.35s ease-out, border-color 0.35s ease-out;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--surface-border-strong);
    background: var(--hover-theme-card);
  }

  @media (max-width: 766px) {
    order: 0;
    width: 100%;
    max-width: 460px;
    padding: 16px 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SoftSkills = styled.div`
  min-width: 195px;
  min-height: 300px;
  box-sizing: border-box;
  grid-area: soft;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 20px 14px;
  border-radius: 18px;
  text-transform: uppercase;
  border: 1px solid var(--surface-border);
  backdrop-filter: blur(12px);
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-1);
  transition: transform 0.22s ease, background-color 0.35s ease-out,
    box-shadow 0.35s ease-out, border-color 0.35s ease-out;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--surface-border-strong);
    background: var(--hover-theme-card);
  }

  @media (max-width: 766px) {
    width: 100%;
    max-width: 460px;
    padding: 16px 10px;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

export const EducationSkills = styled.div`
  max-width: 580px;
  padding: 20px;
  flex: 1;

  border-radius: 18px;
  border: 1px solid var(--surface-border);
  backdrop-filter: blur(12px);
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-1);
  transition: transform 0.22s ease, background-color 0.35s ease-out,
    box-shadow 0.35s ease-out, border-color 0.35s ease-out;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--surface-border-strong);
    background: var(--hover-theme-card);
  }
`;

export const ExperienceSkills = styled(EducationSkills)`
  @media (max-width: 766px) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const MainInfoWrap = styled.div`
  grid-area: main;
`;

export const Experience = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 10px 12px;
  gap: 14px;

  @media (max-width: 766px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;
