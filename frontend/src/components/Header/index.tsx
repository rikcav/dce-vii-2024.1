import * as C from "./styles";
import logo from "../../assets/Logo.svg";

interface InfoProps {
  pageTitle?: string;
}

export const Header: React.FC<InfoProps> = ({
  pageTitle,
}) => {
  return (
    <C.Container>
      <C.TopHeader>
        <C.Logo src={logo} alt="P.A logo" />
      </C.TopHeader>
      <C.Header>
        <C.H1>{pageTitle}</C.H1>
        <C.Line />
      </C.Header>
    </C.Container>
  );
};
