import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
*{
    margin : 0 ;
    padding : 0 ;
    box-sizing : border-box;
    font-family: 'Source Sans Pro' , sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  padding: ${({ padding }) => (padding ? padding : "0 50px")};
  @media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-buttom: 2rem;
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  width: 100%;
  text-align: center;
  letter-spacing: 4px;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 6vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  letter-spacing: 0.4rem;
  text-align: center;
  width: ${({ width }) => (width ? width : "")};
`;

export const TextWrapper = styled.span`
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  text-align: ${({ align }) => (align ? align : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth: "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: ${({ height }) => (height ? height : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "")};
  color: ${({ color }) => (color ? color : "")};
  line-height: ${({ lineHeight }) => (lineHeight? lineHeight : "")};
`;

export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "140px 0")};
  margin: ${({ margin }) => (margin ? margin : '')};
  background: ${({ inverse }) => (inverse ? "#101522" : "white")};
  color: ${({ inverse }) => (inverse ? "white" : "black")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: ${({ height }) => (height ? height : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  max-height: ${({ maxHeight  }) => (maxHeight  ? maxHeight  : "")};
  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : " ")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "100%")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: ${({ height }) => (height ? height : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
  color: ${({ color }) => (color ? color : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  text-align: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : " ")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  width: ${({ width }) => (width ? width : "100%")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: ${({ height }) => (height ? height : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  color: ${({ color }) => (color ? color : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
`;

export const Button = styled(motion.button)`
  border-radius: 4px;
  background: #d61eed;
  white-space: nowarp;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
      transition: all 0.3s ease-out;
      color: black;
      background-color: #ebc214;
  }
`;

export default GlobalStyle;
