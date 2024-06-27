import styled from "styled-components";

export const CommerceCardContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  left: 197px;
  top: 388px;
  background: #365486;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  color: #7FC7D9;
`;

export const CommerceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommerceInfoTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const CommerceDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 10px 0 0;
  color: #FFFFFF;
`;

export const CommerceCardButton = styled.button`
  align-self: center;
  background: none;
  border: none;
  color: #7FC7D9;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;
