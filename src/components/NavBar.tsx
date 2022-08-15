import { useState, useEffect } from 'react'
import { Anchor } from './Anchor'
import { Button } from './Button'
import { ButtonsContainer, Container, SocialContainer } from './NavBar.styles'
import logo from '../assets/img/logo-abimael.svg'
import linkedin from '../assets/img/icon-linkedin.svg'
import github from '../assets/img/icon-github.svg'
import { SocialIcon } from './SocialIcon'

export function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
        return
      }

      setScrolled(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClickUpdateLink = (activeLinkName: string) =>
    setActiveLink(activeLinkName)

  return (
    <Container scrolled={scrolled}>
      <img src={logo} style={{ width: '80px' }} />
      <ButtonsContainer>
        <Anchor
          name="home"
          link="#home"
          isActive={activeLink === 'home'}
          updateLink={handleClickUpdateLink}
        />
        <Anchor
          name="skills"
          link="#skills"
          isActive={activeLink === 'skills'}
          updateLink={handleClickUpdateLink}
        />
        <Anchor
          name="projects"
          link="#project"
          isActive={activeLink === 'projects'}
          updateLink={handleClickUpdateLink}
        />
      </ButtonsContainer>
      <SocialContainer>
        <SocialIcon img={linkedin} />
        <SocialIcon img={github} />
        <Button name="Let's Connect" />
      </SocialContainer>
    </Container>
  )
}
