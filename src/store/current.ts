import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";

const initialState = {
  meme: emptyMeme,
};

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    update: (s, a: { type: string; payload: MemeInterface }) => {
      s.meme = a.payload;
    },
    clear:(s)=>{
        s.meme=emptyMeme;
    }
  },
});

export const { update } = current.actions;
const currentReducer = current.reducer;
export default currentReducer;
