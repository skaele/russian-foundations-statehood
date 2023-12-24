import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Culture } from "./components/Fifith";
import { Footer } from "./components/Footer";
import { Narod } from "./components/Fourth";
import { People } from "./components/People";
import { Territory } from "./components/Seventh";
import { History } from "./components/Sixth";
import { StartBlock } from "./components/Start";
import { ThirdStep } from "./components/Third";
import * as S from "./styled";
import { Worker } from "@react-pdf-viewer/core";
import { SecondStep } from "./components/Second";

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <S.MainWrapper>
        <StartBlock />
        <SecondStep />
        <Territory />
        <History />
        <Narod />
        <Culture />
        <People />
        <ThirdStep />
        <Footer />
      </S.MainWrapper>
    </Worker>
  );
}

export default App;
