import { SocialLink, SocialImg } from './SocialIcon.styles'

interface SocialIconProps {
  img: string
}

export function SocialIcon({ img }: SocialIconProps) {
  return (
    <SocialLink>
      <SocialImg src={img} />
    </SocialLink>
  )
}
