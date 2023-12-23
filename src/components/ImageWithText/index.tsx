import { ReactNode } from "react";
import * as S from "./styled";

type Props = {
  text: ReactNode;
  image: {
    src: string;
    width: number;
    height: number;
  };
  title?: string;
};

export const ImageWithText = ({ text, image, title }: Props) => {
  return (
    <S.Wrapper>
      {title && <S.Title>{title}</S.Title>}
      <S.Content>
        <S.TextWrapper>{text}</S.TextWrapper>
        <img src={image.src} width={image.width} height={image.height} />
      </S.Content>
    </S.Wrapper>
  );
};
