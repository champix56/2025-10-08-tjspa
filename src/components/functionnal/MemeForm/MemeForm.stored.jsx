import React from "react";
import UnconnectedMemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { update, clear } from "../../../store/current";
const MemeForm = (props) => {
  const images = useSelector((storeState) => storeState.ressources.images);
  const meme = useSelector((storeState) => storeState.current.meme);
  const dispatch = useDispatch();
  return (
    <UnconnectedMemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(newMeme) => {
        dispatch(update(newMeme));
      }}
    />
  );
};

export default MemeForm;
export const abc = 123;
