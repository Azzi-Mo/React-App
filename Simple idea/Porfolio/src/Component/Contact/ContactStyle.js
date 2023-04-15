import styled from "styled-components";
import { Container } from "../../globalStyle";

export const FooterContainer = styled(Container)`
  /* border: 3px solid blue; */
  display: gird;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 992px) {
    height: 700px;

    // gpt code end
  }
`;

// FooterDownUp //////////////

export const FooterUp = styled.div`
//   /* border: 1px solid red; */
//   // gpt code start
//   display: flex;
//   height: 500px;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   @media only screen and (max-width: 992px) {
//     flex-direction: column;
//     height: 600px;
//   }
//   // gpt code end
 `;

// FooterDown //////////////

export const FooterDown = styled.div`
//   /* border: 1px solid white; */
//   width: 100%;
//   height: 100px;
//   border-top: 1px solid #eee;

 `;

 export const InfoBox1 = styled.div`
//   /* border: 1px solid red; */

//   // gpt code start

//   flex: 1;
//   /* padding: 10px; */
//   @media only screen and (max-width: 768px) {
//     flex: none;
//     order: 1;
//   }
//   @media only screen and (max-width: 992px) {
//   text-align: center;
//   }
//   // gpt code end
 `;

 export const InfoBox2 = styled.div`
//   /* border: 1px solid orange; */
//   // gpt code start
  
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   /* padding: 10px; */
//   @media only screen and (max-width: 768px) {
//     flex: none;
//     order: 2;
//   }
//   // gpt code end
`

// inputs /////////

 export const InfoBox2Input = styled.input`
//   padding: ${(props) => props.padding};
//   background: none;
//   border: none;
//   outline: none;
//   border-bottom: 1px solid #eee;
//   padding: ${({ padding }) => (padding ? padding : "20px 10px")};
//   color: ${(props) => props.color};
`;

 export const InfoBox2textarea = styled.textarea`
//   background: none;
//   outline: none;
//   border: none;
//   border-bottom: 1px solid #eee;
//   padding: ${({ padding }) => (padding ? padding : "20px 10px")};
//   color: ${(props) => props.color};
 `;

 export const InfoBox2SpanUp = styled.div`
//   height: 50px;
//   text-align: right;
//   position: relative;

 `;

export const InfoBox2Span = styled.span`
//   color: ${(props) => props.color};
//   padding: ${(props) => props.padding};
//   border-bottom: ${(props) => props.borderStyle};
//   width: fit-content;
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   font-size: ${({ size }) => (size ? size : "")};

`
