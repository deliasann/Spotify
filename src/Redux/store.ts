import { configureStore } from "@reduxjs/toolkit";
import userTokenReducer from "./userToken";
import musicsDataReducer from "./musicData";

export const store = configureStore({
	reducer: {
		userToken: userTokenReducer,
		musicsData: musicsDataReducer
	},
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch