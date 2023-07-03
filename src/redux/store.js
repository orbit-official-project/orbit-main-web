import { configureStore } from "@reduxjs/toolkit";

import insData from "./installer/insData";

export const  store = configureStore({
    reducer: {
        insData : insData.reducer,
    },
});