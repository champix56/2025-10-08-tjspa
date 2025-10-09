import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import {REST_ADR, REST_RESSOURCES} from '../config/constantes.js'
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

//appels async de chargement 
export const loadRessources=createAsyncThunk('ressources/load', async()=>{
    const primages=fetch(`${REST_ADR}${REST_RESSOURCES.images}`)
    const prmemes=fetch(`${REST_ADR}${REST_RESSOURCES.memes}`)
    const synchronizedPromise=await Promise.all([primages,prmemes]);
    return {images:await synchronizedPromise[0].json(),memes:await synchronizedPromise[1].json()}

})


//export const {} = ressources.actions
const ressourcesReducer=ressources.reducer;
export default ressourcesReducer;