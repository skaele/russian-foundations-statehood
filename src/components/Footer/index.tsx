import { Text } from "../../styled";
import * as S from "./styled";

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Title>Сайт подготовили:</S.Title>
      <Text style={{ margin: "0 auto", marginTop: "20px", padding: "0 20px" }}>
        Студенты: Карпенко Никита, Лабуренко Кирилл, Кузнецов Никита, Лебедев
        Артем
        <br />
        Научные руководители: Аминов Илья Исакович, Хуснутдинова Ляйля Гельсовна
      </Text>
      <S.Logo />
    </S.Wrapper>
  );
};