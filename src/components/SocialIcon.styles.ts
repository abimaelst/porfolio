import styled from 'styled-components'

export const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  background: ${(props) => props.theme.bg};
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.5);
  &::before {
    content: '';
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
  &:hover::before {
    transform: scale(1);
  }

  &:hover img {
    filter: invert(0);
  }
`

export const SocialImg = styled.img`
  z-index: 0;
  transition: 0.3s ease-in-out;
  background: transparent;
  filter: invert(1);
`
