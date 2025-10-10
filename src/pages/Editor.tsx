import type React from "react";
import MemeSvgViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.stored";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.stored";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { update, clear } from "../store/current";
import store from "../store/store";
const Editor: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const found = store
      .getState()
      .ressources.memes.find((m) => m.id === Number(params.id));
    if (!found) {
      dispatch(clear());
      navigate("/Editor");
      return;
    }
    dispatch(update(found));
  }, [params.id, dispatch, navigate]);
  return (
    <>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </>
  );
};

export default Editor;
