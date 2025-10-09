import React from "react";
import UnconnectedMemeForm from "./MemeForm";

import { useSelector, useDispatch} from "react-redux";
const MemeForm = (props) => {
    const dispatch=useDispatch()
   const images =useSelector((storeState)=>storeState.ressources.images)
   const current =useSelector((storeState)=>storeState.current.meme)
  return (
    <UnconnectedMemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(newMeme) => dispatch(update(newMeme))}
    />
  );
};

export default MemeForm;
