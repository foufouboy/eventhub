import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import type { Dependencies } from "./dependencies";

const reducers = combineReducers({});

export type AppState = ReturnType<typeof reducers>;

// RÉEXPLIQUER PAR RAPPORT À SOLID ET FONCTIONNEMENT

export const createStore = (config: {
	dependencies: Dependencies;
	preloadedState?: Partial<AppState>;
}) => {
	return configureStore({
		reducer: reducers,
		devTools: true,
		preloadedState: config.preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: { extraArgument: config.dependencies },
			}),
	});
};

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppGetState = AppStore["getState"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
