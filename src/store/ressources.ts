import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  MemeSVGThumbnail,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import { REST_ADR, REST_RESSOURCES } from "../config/constantes.js";
import { saveCurrent } from "./current.js";
interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadRessources.fulfilled, (s, a) => {
      console.log(a.type);
      s.images = a.payload.images;
      s.memes = a.payload.memes;
    });
    builder.addCase(
      saveCurrent.fulfilled,
      (s, a: { type: string; payload: MemeInterface }) => {
        const position = s.memes.findIndex((m) => m.id === a.payload.id);
        if (position >= 0) {
          s.memes[position] = a.payload;
        } else s.memes.push(a.payload);
      }
    );
  },
});

//appels async de chargement
export const loadRessources = createAsyncThunk("ressources/load", async () => {
  const primages = fetch(`${REST_ADR}${REST_RESSOURCES.images}`);
  const prmemes = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`);
  const synchronizedPromise = await Promise.all([primages, prmemes]);
  return {
    images: await synchronizedPromise[0].json(),
    memes: await synchronizedPromise[1].json(),
  };
});

//export const {} = ressources.actions
const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;
