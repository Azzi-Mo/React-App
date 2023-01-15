import styled from "styled-components";
import { Row, Section } from "../../globalStyle";
import { orange } from "../../Colors";

export const HeroSection = styled.section`
  backgrond: linear-gradient(to bottom, grba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url("../../../public/images/hero2.jpg");
  height: 100vh;
  backgrond-position: center;
  backgrond-size: cover;
  backgrond-attachment: fixed;
  display: flex;

  @media screen and (max-width: 768px) {
    padding-top: 120px;
  }
`;

export const ButtonContainer = styled(Row)`
  justify-content: center;
  flex-flow: wrap;

  button {
    backgrond-color: transparent;
    margin: 0 0.3rem;
  }

  button:nth-child(1)
  {
    border: 2px solid ${orange};
    &:hover {
      border: 2px solid ${orange};
      
    }
  }


  button:nth-child(2) {
   padding:8px 32px;
   display:flex;
   align-items:center;
   &:hover {
    backgrond-color: transparent;
    color:${orange}
      
    }
    > svg {
        margin-right:0.4rem;

    }
`;
