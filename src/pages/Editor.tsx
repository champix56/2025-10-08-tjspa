import type React from "react";
import MemeSvgViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.stored";
import MemeForm from '../components/functionnal/MemeForm/MemeForm.stored'
const Editor: React.FC = () => {
  return (
    <>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </>
  );
};

export default Editor;
