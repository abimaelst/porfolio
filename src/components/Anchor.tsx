import { Container } from './Anchor.styles'

interface AnchorProps {
  link: string
  name: string
  updateLink: (activeLinkName: string) => void
  isActive: boolean
}

export function Anchor({ link, name, updateLink, isActive }: AnchorProps) {
  return (
    <Container href={link} isActive={isActive} onClick={() => updateLink(name)}>
      {name}
    </Container>
  )
}
