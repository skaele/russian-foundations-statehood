import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90%;
`;

export const TextedImageWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 90%;
  height: 578px;
`;

export const TargetWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Flag = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("./flag.png");
  width: 26px;
  height: 170px;
`;

export const TextTarget = styled.span`
  font-size: 2.5em;
`;

export const Map = styled.img`
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
