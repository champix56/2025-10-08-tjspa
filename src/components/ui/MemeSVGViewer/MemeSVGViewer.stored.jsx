import React from "react";
import UnconnectedMemeSVGViewer from "orsys-tjs-meme";
import { useSelector } from "react-redux";
const MemeSvgViewer = (props) => {
  const images = useSelector((storeState) => storeState.ressources.images);
  const current = useSelector((storeState) => storeState.current.meme);

  return (
    <UnconnectedMemeSVGViewer
      {...props}
      meme={current}
      images={images.find((i) => i.id === current.imageId)}
    />
  );
};
export default MemeSvgViewer;
