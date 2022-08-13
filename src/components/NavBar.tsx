import { useState, useEffect } from 'react'
import { Anchor } from './Anchor'
import { Button } from './Button'
import { ButtonsContainer, Container, SocialContainer } from './NavBar.styles'

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
      <h1 style={{ color: 'white' }}>LOGO</h1>
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
        <Button name="Let's Connect" />
      </SocialContainer>
    </Container>
  )
}
