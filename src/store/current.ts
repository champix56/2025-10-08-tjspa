import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";
import { REST_ADR, REST_RESOURCES } from "../config/constantes.js";
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
    clear: (s) => {
      s.meme = emptyMeme;
    },
  },
  extraReducers(builder) {
      builder.addCase(saveCurrent.fulfilled,(s,a)=>{
        s.meme=a.payload
      })
  },
});

export const saveCurrent = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const pr = await fetch(
      `${REST_ADR}${REST_RESOURCES.meme}${
        meme.id !== undefined ? `/${meme.id}` : ""
      }`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meme),
      }
    );
    return await pr.json();
  }
);

export const { update } = current.actions;
const currentReducer = current.reducer;
export default currentReducer;
