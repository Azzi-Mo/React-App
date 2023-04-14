import styled from "styled-components";
import { Container } from "../../globalStyle";

export const FooterContainer = styled(Container)`

position: relative;
/* display: flex;
flex-direction: column; */

`

export const FooterUp = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    border:1px solid red;
    position: absolute; /* positions the child element relative to parent */
  /* top: 0; aligns child to the top of the parent container */
  height: 80%; /* takes up 80% of parent height */
  width: 100%; /* takes up full width of parent container */
  box-sizing: border-box; /* includes padding and border in the height calculation */
  /* padding: 20px 0; adds 20px padding to top and bottom of child */

`
export const FooterDown = styled.div`

/* border:1px solid white; */
position: absolute; /* positions the child element relative to parent */
  /* top: 0; aligns child to the top of the parent container */
  height: 20%; /* takes up 80% of parent height */
  width: 100%; /* takes up full width of parent container */
  box-sizing: border-box; /* includes padding and border in the height calculation */
  /* padding: 20px 0; adds 20px padding to top and bottom of child */
`

export const InfoBox1 = styled.div``
export const InfoBox2 = styled.div`
display: flex;
flex-direction: column;
`

export const InfoBox2Input = styled.input`
background: none;
border: none;
outline: none;
border-bottom: 1px solid #eee;
`

export const InfoBox2textarea = styled.textarea`
background: none;
outline: none;


`
export const InfoBox2Span = styled.span`

color:  ${props => props.color};
text-align: right;

`
