import "./App.css";
import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header.jsx";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import { emptyMeme, MemeSVGViewer, type MemeInterface } from "orsys-tjs-meme";
import Footer from "../ui/Footer/Footer";
import { useState } from "react";
const App = () => {
  const [currentMeme, setCurrentMeme] = useState<MemeInterface>(emptyMeme);
  return (
    <FlexHGrow3>
      <Header />
      <Navbar />
      <FlexVGrow1>
        <MemeSVGViewer basePath="" image={undefined} meme={currentMeme} />
        <MemeForm
          meme={currentMeme}
          onMemeChange={(newMeme: MemeInterface) => {
            setCurrentMeme(newMeme);
          }}
        />
      </FlexVGrow1>
      <Footer />
    </FlexHGrow3>
  );
};

export default App;
