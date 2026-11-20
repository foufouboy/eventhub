import { describe, it, expect } from "vitest";
import { createTestStore } from "../../testing/tests-environment";

describe("store", () => {
	it("se crée avec un état vide", () => {
		const store = createTestStore();
		expect(store.getState()).toEqual({});
	});
});
