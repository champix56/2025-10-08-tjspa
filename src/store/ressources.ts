import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';

interface IRessourcesState{
    memes:Array<MemeInterface>
    images:Array<ImageInterface>
}
const initialState:IRessourcesState = {
    memes:[],
    images:[],
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {}
});

//export const {} = ressources.actions
const ressourcesReducer=ressources.reducer;
export default ressourcesReducer;