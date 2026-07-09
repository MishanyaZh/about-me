import styled from '@emotion/styled';

export const MainInfoBox = styled.div`
  margin: 16px 10px 10px 10px;
  padding: 24px;
  width: 100%;
  max-width: 540px;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;
  transition: transform 0.22s ease, background-color 0.35s ease-out,
    box-shadow 0.35s ease-out, border-color 0.35s ease-out;
  border-radius: 24px;
  border: 1px solid var(--surface-border);
  backdrop-filter: blur(14px);
  background: var(--hero-overlay), var(--color-theme-card);
  box-shadow: var(--box-shadow-1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      circle at top right,
      rgba(112, 240, 211, 0.14),
      transparent 32%
    );
  }

  h1,
  h2 {
    position: relative;
    z-index: 1;
    padding-bottom: 8px;
    color: var(--text-color-white);
    text-shadow: var(--shadow-neon);
  }

  h1 {
    font-size: clamp(1.7rem, 3vw, 2.35rem);
    line-height: 1.2;
    letter-spacing: 0.02em;
    animation: var(--animation-neonFlicker);
  }

  h2 {
    font-size: clamp(0.98rem, 1.7vw, 1.12rem);
    line-height: 1.35;
    font-weight: 500;
    color: var(--text-color);
  }

  @media (max-width: 766px) {
    margin: 12px 0 8px 0;
    padding: 16px;
    max-width: 460px;
  }
`;

export const Summary = styled.div`
  position: relative;
  z-index: 1;
  margin: 14px auto 0;
  padding: 14px 14px 12px;
  max-width: 460px;
  box-sizing: border-box;
  border-radius: 18px;
  text-align: justify;
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.5vw, 1.02rem);
  color: var(--case-text-color);
  background: var(--summary-surface);
  border: 1px solid var(--surface-border);

  @media (max-width: 766px) {
    width: 100%;
    max-width: 450px;
    padding: 12px;
  }
`;

export const SummarySkills = styled.span`
  color: var(--text-acc);
`;

export const Img = styled.img`
  position: relative;
  z-index: 1;
  width: min(100%, 320px);
  height: auto;
  margin: 14px auto 0;
  border-radius: 22px;
  border: 1px solid var(--surface-border);
  box-shadow: var(--box-shadow-1);
  transition: transform 0.22s ease, box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px) scale(1.01);
    border-color: var(--surface-border-strong);
    box-shadow: var(--box-shadow-2);
  }
`;
