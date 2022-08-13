import { ButtonBase } from './Button.styles'

interface ButtonProps {
  name: string
}

export function Button({ name }: ButtonProps) {
  return <ButtonBase>{name}</ButtonBase>
}
