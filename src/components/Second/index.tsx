import { Text } from "../../styled";
import * as S from "./styled";

export const SecondStep = () => {
  return (
    <S.Wrapper id={"is"}>
      <b style={{ fontSize: "1.7em" }}></b>
      <Text style={{ color: "blue", fontStyle: "italic" }}>
        Откуда начинается Россия? <br />С Курил? С Камчатки? Или с Командор?
        <br />О чем грустят глаза ее степные Над камышами всех ее озер?
        <br />
        Россия начинается с пристрастья к труду,
        <br />к терпенью,
        <br />к правде,
        <br />к доброте.
        <br />
        Вот в чем ее звезда. Она прекрасна!
        <br />
        Она горит и светит в темноте.
        <br />
        Отсюда все дела ее большие,
        <br /> Ее неповторимая судьба.
        <br /> И если ты причастен к ней — Россия <br />
        Не с гор берет начало, а с тебя!
        <br />
        <span style={{ fontSize: "1em", float: "right" }}>
          Виктор Боков
        </span>
      </Text>
    </S.Wrapper>
  );
};
