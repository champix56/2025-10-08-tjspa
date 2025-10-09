import { configureStore } from "@reduxjs/toolkit";
import currentReducer, { update } from "./current";
import { emptyMeme } from "orsys-tjs-meme";

const store=configureStore({
    reducer:currentReducer
})
export default store;

//export des types generiques automatisé par la constitution du store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// demo du store
//affichage du contenu du store
console.log(store.getState());


//envoi dune moddif dans le contenu du store
store.dispatch(update({...emptyMeme,titre:'coucou', x:12}))

//affichage du contenu du store
console.log(store.getState());


//envoi dune moddif dans le contenu du store
store.dispatch(update({...emptyMeme,text:'hello', y:12}))

//affichage du contenu du store
console.log(store.getState());

