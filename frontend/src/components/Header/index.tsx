import * as C from './styles';
import logo  from '../../assets/Logo.svg'

export const Header = () => {
  return (
    <C.Container>
      <C.TopHeader>
        <C.Logo src={logo} alt="P.A logo" />
      </C.TopHeader>
    </C.Container>
  )
}