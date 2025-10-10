import { createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import {memes,images} from '../../db/db.json'

interface IRessourcesState{
    memes:Array<MemeInterface>
    images:Array<ImageInterface>
}
const initialState:IRessourcesState = {
  memes: memes,
  images: images,
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
});

// export const {} = ressources.actions
const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;
