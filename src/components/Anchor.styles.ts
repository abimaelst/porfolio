import styled from 'styled-components'

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.a<ContainerProps>`
  color: ${(props) => (props.isActive ? 'green' : 'white')};
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: capitalize;

  transition: color 0.3s;

  &:hover {
    color: blue;
  }
`
