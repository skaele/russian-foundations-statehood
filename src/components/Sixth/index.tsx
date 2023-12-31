import { Text } from "../../styled";
import SlidePresentationExample from "../pdf";

import * as S from "./styled";

export const History = () => {
  return (
    <S.Wrapper id="history">
      <b style={{ fontSize: "2em" }}>История России</b>

      <Text>
        История России – это эпопея длинного и сложного становления, начиная с
        формирования Киевской Руси в IX веке. В это время славянские племена
        объединились в первые государственные образования, а затем стали
        подвергаться монгольскому нашествию, что сформировало особую смесь
        культур и традиций.
        <br />
        <br />
        В XIV-XVII веках в Московском царстве началось становление самодержавия,
        а Иван Грозный и Петр I провели ключевые реформы, открывшие России путь
        к современности. Завоевания, экспансия на восток и запад, а также
        культурные преобразования сделали страну важным участником европейских
        дел.
        <br />
        <br />
        В XVIII веке Российская империя приобрела силу и влияние в Европе. В XIX
        веке аболиция крепостного права и индустриализация подтолкнули страну к
        модернизации. Век завершился несмотря на внутренние потрясения, такие
        как революция 1905 года.
        <br />
        <br />
        XX век стал периодом глубоких перемен – Россия пережила две мировые
        войны, Октябрьскую революцию и становление Советского Союза. После
        распада СССР в 1991 году, страна вступила в новый этап, с постепенным
        переходом к рыночной экономике и формированию новой политической
        системы.
        <br />
        <br />
        Сегодня Россия – это страна с богатой историей, которая оставляет свой
        отпечаток на ее культуре, политике и обществе.
      </Text>

      <SlidePresentationExample fileUrl="./1.pdf" />
    </S.Wrapper>
  );
};
