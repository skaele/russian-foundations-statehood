import * as S from "./styled";

export const StartBlock = () => {
  return (
    <S.ImageContent>
      <S.Wrapper>
        <S.Header>
          <S.Img src="/logo.png" alt="logo" height={120} />
          <span>Россия это</span>
          <span>Народ</span>
          <span>Культура</span>
          <span>Территория</span>
          <span>История</span>
          <span>Люди России</span>
        </S.Header>
        <S.Title>
          Российская <br />
          держава
        </S.Title>
      </S.Wrapper>
    </S.ImageContent>
  );
};
