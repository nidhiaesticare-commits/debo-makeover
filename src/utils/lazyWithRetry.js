import { lazy } from "react";

const CHUNK_ERROR_PATTERNS = [
	/failed to fetch dynamically imported module/i,
	/importing a module script failed/i,
	/loading chunk [\w-]+ failed/i,
	/error loading dynamically imported module/i,
	/fetch.*module/i,
];

function isChunkLoadError(error) {
	if (!error) {
		return false;
	}

	const message = `${error.message || ""} ${error.name || ""}`;
	return CHUNK_ERROR_PATTERNS.some((pattern) => pattern.test(message));
}

export function lazyWithRetry(importer, key) {
	return lazy(async () => {
		try {
			const mod = await importer();

			if (typeof window !== "undefined") {
				window.sessionStorage.removeItem(`lazy-reload:${key}`);
			}

			return mod;
		} catch (error) {
			if (typeof window !== "undefined" && isChunkLoadError(error)) {
				const storageKey = `lazy-reload:${key}`;
				const hasReloaded = window.sessionStorage.getItem(storageKey) === "1";

				if (!hasReloaded) {
					window.sessionStorage.setItem(storageKey, "1");
					window.location.reload();

					// Keep Suspense pending while the page reload is in-flight.
					return new Promise(() => {});
				}

				window.sessionStorage.removeItem(storageKey);
			}

			throw error;
		}
	});
}
