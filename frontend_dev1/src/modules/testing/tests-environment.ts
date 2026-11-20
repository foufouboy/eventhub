import type { Dependencies } from "../store/dependencies";
import { createStore, type AppState } from "../store/store";

export const createTestStore = (config?: {
	initialState?: Partial<AppState>;
	dependencies?: Partial<Dependencies>;
}) =>
	createStore({
		dependencies: { ...config?.dependencies },
		preloadedState: config?.initialState,
	});
