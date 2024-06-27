import * as C from './styles';
import { ArrowRight } from '@phosphor-icons/react'; // Certifique-se de importar o ícone correto

interface InfoProps {
  commerceName?: string;
  description?: string;
  onClickArrowRight?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CommerceCard: React.FC<InfoProps> = ({
  commerceName,
  description,
  onClickArrowRight
}) => {
  return (
    <C.CommerceCardContainer>
      <C.CommerceInfoContainer>
        <C.CommerceInfoTitle>Bosco Restaurante</C.CommerceInfoTitle>
        <C.CommerceDescription>Restaurante em frente a UPE com almoço muito bom</C.CommerceDescription>
      </C.CommerceInfoContainer>
      <C.CommerceCardButton onClick={onClickArrowRight}>
        Ver Detalhes
        <ArrowRight weight="bold" size={24} color="#7FC7D9" />
      </C.CommerceCardButton>
    </C.CommerceCardContainer>
  );
};