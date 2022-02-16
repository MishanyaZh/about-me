import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px 5px 0 5px;
  /* margin-left: 5px; */
`;

export const Item = styled.li`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: calc((100% - 30px) / 1);

  margin-bottom: 15px;
  height: 200px;
  min-width: 236px;
  max-width: 237px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-2);
  background: var(--color-theme-card);
  transition: all 0.5s ease-out;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    width: 0%;
    padding-top: 0%;
    transform: translate(-50%, -50%);
    background: var(--hover-theme-card);
    transition: 0.5s ease padding-top, 0.5s ease width;
  }

  &:hover {
    &:before {
      width: 150%;
      padding-top: 150%;
    }

    & Button {
      border: 1px solid var(--text-acc);
      background: var(--color-theme-card);
      color: var(--text-acc);
      transition: all 0.5s ease-out;
    }
    /* & Span {
      color: var(--text-color);
      transition: all 0.5s ease-out;
    } */
  }

  @media (min-width: 550px) {
    flex-basis: calc((100% - 40px) / 2);
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 80px) / 3);
  }
  @media (min-width: 1024px) {
    flex-basis: calc((100% - 80px) / 4);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--text-acc);
`;

export const Button = styled.button`
  position: relative;

  display: inline-block;
  text-align: center;
  font-size: 16px;
  margin-top: 5px;
  padding: 10px 10px;
  border-radius: 5px;

  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease-out;
  color: var(--text-color);
  background: var(--hover-theme-card);
  border: 1px solid var(--text-color);
`;

export const Span = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 5px 0 5px;
  height: 65px;
  color: var(--text-color);
`;

export const Technologies = styled.span`
  position: relative;
  color: var(--text-acc);
`;

export const TitleCard = styled.h3`
  position: relative;
`;
