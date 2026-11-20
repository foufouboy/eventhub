import type { Dependencies } from "../store/dependencies";
import { createStore, type AppStore } from "../store/store";

export class App {
	public dependencies: Dependencies;
	public store: AppStore;

	constructor() {
		this.dependencies = App.setupDependencies();
		this.store = createStore({ dependencies: this.dependencies });
	}

	private static setupDependencies(): Dependencies {
		return {};
	}
}

export const app = new App();
