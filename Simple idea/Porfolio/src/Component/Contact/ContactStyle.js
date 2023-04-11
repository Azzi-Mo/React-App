import styled from "styled-components";

const color = {
  midnight:'#141514', 
  gray:'#252425',
  light_green:'#4CE3A0',
  snow:'#FFFFFF', 
}

export const Section = styled.section`

  width: 100%;
  min-height:500px;
  background-color: ${props => props.gray ? color.gray : color.midnight };
  color: ${props => props.primary ? 'white' : 'white'};
  margin-right: auto;
  margin-left: auto;
`
export const InfoContent = styled.div``
export const FootContent = styled.div``