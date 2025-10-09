import "./App.css";
import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header.jsx";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import {
  emptyMeme,
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import Footer from "../ui/Footer/Footer";
import { REST_ADR, REST_RESSOURCES } from "../../config/constantes.js";
import { useEffect, useState } from "react";
import store from '../../store/store.ts'
// import {memes as rest_memes,images as rest_imgs} from '../../../db/db.json'
const App = () => {
  const [currentMeme, setCurrentMeme] = useState<MemeInterface>(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([]);
  useEffect(() => {
    //mise a jour de l'etat actuel avec etat du store
    setCurrentMeme(store.getState().current.meme);
    setImages(store.getState().ressources.images);
    //mise a jour pour les changements ulterieurs
    store.subscribe(()=>{
      setCurrentMeme(store.getState().current.meme);
      setImages(store.getState().ressources.images);
    })

  }, []);
  return (
    <FlexHGrow3>
      <Header />
      <Navbar />
      <FlexVGrow1>
        <MemeSVGViewer
          basePath=""
          image={images.find((img) => img.id == currentMeme.imageId)}
          meme={currentMeme}
        />
        <MemeForm
          images={images}
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
