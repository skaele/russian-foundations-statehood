import { Culture } from "./components/Fifith";
import { Narod } from "./components/Fourth";
import { People } from "./components/People";
import { SecondStep } from "./components/Second";
import { Territory } from "./components/Seventh";
import { History } from "./components/Sixth";
import { StartBlock } from "./components/Start";
import { ThirdStep } from "./components/Third";
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
    </S.MainWrapper>
  );
}

export default App;
