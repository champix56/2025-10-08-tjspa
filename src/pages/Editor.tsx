import type React from "react";
import MemeSvgViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.stored";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.stored";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { update, clear } from "../store/current";
import { type RootState } from "../store/store";
const Editor: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const memes = useSelector((s: RootState) => {
    return s.ressources.memes;
  });
  useEffect(() => {
    const found = memes.find((m) => m.id === Number(params.id));
    if (!found) {
      if (undefined === params.id) {
        dispatch(clear());
      } else {
        navigate("/Editor");
      }
      return;
    }
    dispatch(update(found));
  }, [params.id, dispatch, navigate, memes]);
  return (
    <>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </>
  );
};

export default Editor;
