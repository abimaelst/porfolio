import styled from 'styled-components'

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.a<ContainerProps>`
  color: ${(props) => (props.isActive ? '#bb0077' : 'white')};
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: capitalize;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
