import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
`;

export const Header = styled.h1`
  color: ${({ color }) => (color ? color : "blue")};
`;
