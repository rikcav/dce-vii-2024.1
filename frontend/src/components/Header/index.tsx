import * as C from './styles';
import logo  from '../../assets/Logo.svg'

export const Header = () => {
  return (
    <C.Container>
      <C.Logo src={logo} alt="P.A logo" />
    </C.Container>
  )
}