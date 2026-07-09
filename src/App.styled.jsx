import styled from '@emotion/styled';

export const AppBox = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* footer down */

  &::before,
  &::after {
    content: '';
    position: fixed;
    inset: auto;
    z-index: -1;
    pointer-events: none;
    filter: blur(70px);
    opacity: 0.8;
  }

  &::before {
    top: -80px;
    right: -40px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(112, 240, 211, 0.12);
  }

  &::after {
    left: -120px;
    top: 180px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: rgba(140, 200, 255, 0.09);
  }
`;

export const Main = styled.main`
  position: relative;
  z-index: 1;
  flex-grow: 1; /* footer down */
  padding-bottom: 10px;
`;
