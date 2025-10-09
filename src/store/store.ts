import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer, { update } from "./current";
import { emptyMeme } from "orsys-tjs-meme";
import ressourcesReducer, { loadRessources } from "./ressources";

const store=configureStore({
    reducer:combineReducers({current: currentReducer, ressources:ressourcesReducer})
})
export default store;

//export des types generiques automatisé par la constitution du store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.dispatch(loadRessources());


// demo du store
//affichage du contenu du store a chaque changement (subscribe)
store.subscribe(()=>{
    console.log(store.getState());    
})


//envoi dune moddif dans le contenu du store
store.dispatch(update({...emptyMeme,titre:'coucou', x:12}))

//affichage du contenu du store
//console.log(store.getState());


//envoi dune moddif dans le contenu du store
store.dispatch(update({...emptyMeme,text:'hello', y:12}))

//affichage du contenu du store
//console.log(store.getState());

//affichage du current
console.log(store.getState().current.meme)