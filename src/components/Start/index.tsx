import * as S from "./styled";

export const StartBlock = () => {
  return (
    <S.ImageContent>
      <S.Wrapper>
        <S.Header>
          <S.Img src="./logo.png" alt="logo" height={120} />
          <S.Link href={"#narod"}>Народ</S.Link>
          <S.Link href={"#ter"}>География</S.Link>
          <S.Link href={"#history"}>История</S.Link>
          <S.Link href={"#culture"}>Культура</S.Link>
          <S.Link href={"#people"}>Люди</S.Link>
        </S.Header>
        <S.Title>
          Российская <br />
          держава
        </S.Title>
      </S.Wrapper>
    </S.ImageContent>
  );
};
