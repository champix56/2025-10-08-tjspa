import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme, type MemeInterface } from 'orsys-tjs-meme';
import { loadRessources } from './asyncCaller';

const initialState = {
    meme:emptyMeme
}

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update:(state,action:{type:string, payload:MemeInterface})=>{
        state.meme=action.payload;
    },
    clear:(state)=>{
        state.meme=emptyMeme;
    },
    // updatePosition:(s,a:{type:string,payload:{x:number,y:number}})=>{
    //     s.meme.x=a.payload.x>12?a.payload.x:12;
    // }
  },
  extraReducers:(builder)=>{
   
  }
});

export const {update, clear} = current.actions

const currentReducer=  current.reducer
export default currentReducer