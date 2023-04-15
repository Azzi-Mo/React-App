import styled from "styled-components";
import { Container } from "../../globalStyle";

export const FooterContainer = styled(Container)`
  border: 3px solid blue;

  display: gird;
  flex-direction: column;
  position:relative;
`;

// FooterDownUp //////////////

export const FooterUp = styled.div`
  border: 1px solid red;
  // gpt code start
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;

    // gpt code end
  }
`;

// FooterDown //////////////

export const FooterDown = styled.div`
  border: 1px solid white;
  width: 100%;


`;

export const InfoBox1 = styled.div`
  border: 1px solid red;

  // gpt code start

  flex: 1;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    flex: none;
    order: 1;
  }
  // gpt code end
`;

export const InfoBox2 = styled.div`
  border: 1px solid orange;
  // gpt code start

  flex: 1;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    flex: none;
    order: 2;
  }
  // gpt code end
`;

// inputs /////////

export const InfoBox2Input = styled.input`
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #eee;
  padding: ${({ padding }) => (padding ? padding : "20px 0")};
  color: ${(props) => props.color};
`;

export const InfoBox2textarea = styled.textarea`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  padding: ${({ padding }) => (padding ? padding : "30px 0 0")};
  color: ${(props) => props.color};
`;
export const InfoBox2Span = styled.span`
  color: ${(props) => props.color};
  text-align: right;
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.borderStyle};
  width: fit-content;
  position: absolute;
  right: 0;
  bottom: calc(20% - 50px);
`;
