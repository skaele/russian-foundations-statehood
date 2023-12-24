import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  gap: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;

  width: 100%;
`;

export const TextWrapper = styled.div`
  font-size: 1.5em;
  text-align: justify;
`;

export const Title = styled.h3`
  font-size: 2em;
  font-weight: 700;
`;

export const Img = styled.img`
  object-fit: cover;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
