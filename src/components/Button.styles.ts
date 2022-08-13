import styled from 'styled-components'

export const ButtonBase = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: capitalize;
  border: 0;

  cursor: pointer;

  transition: color 0.3s;

  &:hover {
    color: blue;
  }
`
