import React, { useState } from "react";
import UnconnectedMemeForm from "./MemeForm";

import store from "../../../store/store";
import { update } from "../../../store/current";
const MemeForm = (props) => {
  const [current, setcurrent] = useState(store.getState().current.meme);
  const [images, setimages] = useState(store.getState().ressources.images);

  return (
    <UnconnectedMemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(newMeme) => store.dispatch(update(newMeme))}
    />
  );
};

export default MemeForm;
