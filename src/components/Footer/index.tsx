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
        Научный руководитель: Хуснутдинова Ляйля Гельсовна
        <br /> Научный руководитель: Аминов Илья Исакович
      </Text>
      <S.Logo />
    </S.Wrapper>
  );
};
