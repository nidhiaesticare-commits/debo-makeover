import React from "react";

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

class AppErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, chunkError: false };
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			chunkError: isChunkLoadError(error),
		};
	}

	componentDidCatch(error) {
		// Keep logging for diagnostics while still recovering gracefully.
		// eslint-disable-next-line no-console
		console.error("Application error captured:", error);
	}

	handleReload = () => {
		window.location.reload();
	};

	render() {
		if (!this.state.hasError) {
			return this.props.children;
		}

		return (
			<main className="grid min-h-screen place-items-center bg-[var(--bg-main)] px-6 text-center text-[var(--text-light)]">
				<div className="max-w-xl rounded-2xl border border-rose-300/10 bg-white/5 p-8 backdrop-blur-md">
					<h1 className="mb-3 text-3xl font-semibold text-[var(--cream)]">
						We are refreshing your experience
					</h1>
					<p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
						{this.state.chunkError
							? "A recent update is loading. Please refresh once to get the latest version."
							: "Something went wrong while loading the page. Please refresh to continue."}
					</p>
					<button
						type="button"
						onClick={this.handleReload}
						className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--text-light)]"
					>
						Refresh Website
					</button>
				</div>
			</main>
		);
	}
}

export default AppErrorBoundary;
