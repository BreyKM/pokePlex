import { configureStore } from "@reduxjs/toolkit";

import { pokemonApi } from "../fromAPI/pokemonApi.js";
import { searchSlice } from "../slices/searchSlice.js";
import modalReducer from "../slices/modalSlice.js";






export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        pokemonName: searchSlice.reducer,
        modal:  modalReducer,
        

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

