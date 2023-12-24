import { End } from "./components/Consultion";
import { Culture } from "./components/Fifith";
import { Footer } from "./components/Footer";
import { Narod } from "./components/Fourth";
import { People } from "./components/People";
import { SecondStep } from "./components/Second";
import { Territory } from "./components/Seventh";
import { History } from "./components/Sixth";
import { StartBlock } from "./components/Start";
import { ThirdStep } from "./components/Third";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./styled";

function App() {
  return (
    <S.MainWrapper>
      <StartBlock />
      <SecondStep />
      <ThirdStep />
      <Narod />
      <Culture />
      <Territory />
      <History />
      <People />
      <End />
      <Footer />
    </S.MainWrapper>
  );
}

export default App;
