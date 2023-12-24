import styled from "styled-components";

export const ImageContent = styled.div`
  width: 100%;
  background-image: url("./start-background.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin: 0 auto;
  min-height: 1300px;

  max-width: 90%;
`;

export const Header = styled.header`
  display: flex;
  margin-top: 30px;
  gap: 92px;

  font-size: 2em;
  font-weight: 700;
  overflow: hidden;
`;

export const Img = styled.img`
  margin-right: 45px;
`;

export const Title = styled.h1`
  color: #e7e8eb;
  font-size: 6em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;
