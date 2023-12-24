import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 1.5em;
  text-align: justify;
`;

export const StyledCarousel = styled(Carousel)`
  margin: 0 auto;
  width: 80%;
  margin-top: 100px;
`;
