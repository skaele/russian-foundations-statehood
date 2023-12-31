import { StyledCarousel } from "../../styled";
import { ImageWithText } from "../ImageWithText";

import * as S from "./styled";

export const Culture = () => {
  return (
    <S.Wrapper id="culture">
      <ImageWithText
        text={
          <>
            Культура России – это удивительное слияние богатства и разнообразия,
            созданное на протяжении веков. Эта мозаика включает в себя
            литературу, музыку, искусство и традиции, отражая историческое
            наследие и многоликую природу страны.
            <br />
            <br />
            Литература России озарена произведениями великих писателей, таких
            как Толстой, Достоевский и Чехов. Их произведения не только отражают
            человеческий дух, но и поднимают вопросы о нравственности,
            человеческой судьбе и социальной справедливости.
            <br />
            <br />
            Музыка в России стала неотъемлемой частью ее культурного капитала.
            Творения композиторов, таких как Чайковский, Рахманинов и
            Шостакович, проникнуты глубоким эмоциональным содержанием и широким
            диапазоном стилей.
            <br />
            <br />
            Искусство российских художников, таких как Репин и Кандинский,
            находит вдохновение в истории, природе и социокультурных изменениях.
            Русская архитектура, представленная кремлями, церквями и дворцами,
            является визуальным свидетельством богатства культурного наследия.
            <br />
            <br />
            Традиционные русские обычаи и праздники, включая Масленицу, Пасху и
            Новый год, украшают культурный ландшафт. Фольклор, танцы и
            национальные костюмы подчеркивают разнообразие этнических групп,
            существующих в пределах страны.
            <br />
            <br />
            Культура России – это динамичное взаимодействие прошлого и
            настоящего, оформляющее и определяющее сущность этой удивительной
            страны.
          </>
        }
        image={{
          src: "./culture.png",
          width: 600,
          height: 400,
        }}
        title="Культура"
      />
      <StyledCarousel showThumbs={false} infiniteLoop swipeable>
        <img src="./cul-1.png" />
        <img src="./cul-2.png" />
        <img src="./cul-3.png" />
        <img src="./cul-4.png" />
      </StyledCarousel>
    </S.Wrapper>
  );
};
