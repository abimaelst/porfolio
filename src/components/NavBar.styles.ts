import styled from 'styled-components'

interface NavProps {
  scrolled: boolean
}

export const Container = styled.nav<NavProps>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => (props.scrolled ? 'green' : '')};
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
