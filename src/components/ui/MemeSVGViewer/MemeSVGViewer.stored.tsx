import React from "react";
import { MemeSVGViewer as UnconnectedMemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
interface IMemeSVGViewerProps {
  basePath: "" | "/";
}
const MemeSvgViewer :React.FC<IMemeSVGViewerProps>= (props) => {
  const images = useSelector(
    (storeState: RootState) => storeState.ressources.images
  );
  const current = useSelector(
    (storeState: RootState) => storeState.current.meme
  );

  return (
    <UnconnectedMemeSVGViewer
      {...props}
      meme={current}
      image={images.find((i) => i.id === current.imageId)}
    />
  );
};
export default MemeSvgViewer;
