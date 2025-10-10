import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR, REST_RESSOURCES } from "../config/constantes.js";
import type { MemeInterface } from "orsys-tjs-meme";

export const loadRessources = createAsyncThunk(
  "ressources/loadRessources",
  async () => {
    const pri = fetch(`${REST_ADR}${REST_RESSOURCES.images}`);
    const prm = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`);
    const prall = await Promise.all([pri, prm]);
    return { images: await prall[0].json(), memes: await prall[1].json() };
  }
);

export const saveMeme = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const prm = await fetch(
      `${REST_ADR}${REST_RESSOURCES.meme}${
        undefined !== meme.id ? "/" + meme.id : ""
      }`,
      {
        method: undefined !== meme.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(meme),
      }
    );
    if(prm.ok)return await prm.json();
    else return null;
  }
);
