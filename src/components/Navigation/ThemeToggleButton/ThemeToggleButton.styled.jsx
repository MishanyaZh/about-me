import styled from '@emotion/styled';

export const ThemeButton = styled.button`
  background: var(--color-theme-card);
  border: 1px solid var(--text-color);
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--text-color);
  transition: all 0.2s ease-out;

  &:hover {
    color: var(--text-acc);
    border: 1px solid var(--text-acc);
    box-shadow: var(--box-shadow-2);
    transform: scale(1.1);
    background: var(--hover-theme-card);
  }
`;
