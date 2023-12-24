import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 180px;
`;

export const Title = styled.b`
  margin-bottom: 20px;
  font-size: 3em;
  margin: 0 auto;
`;

export const Logo = styled.div`
  margin: 0 auto;
  margin-top: 120px;
  width: 450px;
  height: 147px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("./logo-polytech.png");

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
