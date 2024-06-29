import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 73px;
  background: #dcf2f1;
  box-shadow: 0 3px 4px rgba(2, 15, 29, 0.242);
`;

export const Logo = styled.img`
  width: 46px;
  height: 45px;
  margin-top: 18px;
  margin-left: 23px;
  padding: 5px;
`;

export const Header = styled.div`
  padding: 70px 0 28px 81px;
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #070f2b;
  line-height: 37px;
`;

export const Line = styled.div`
  border: 1px solid #7fc7d9;
  position: absolute;
  height: 0px;
  right: 46.99px;
  margin-top: 28px;
  left: 42px;
`;
