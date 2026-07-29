import { useEffect, useState } from "react";

function SafeImage({
	src,
	fallbackSrc,
	alt,
	className = "",
	placeholderClassName = "",
	loading = "lazy",
	decoding = "async",
	...props
}) {
	const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc || "");
	const [fallbackUsed, setFallbackUsed] = useState(false);

	useEffect(() => {
		setCurrentSrc(src || fallbackSrc || "");
		setFallbackUsed(false);
	}, [src, fallbackSrc]);

	const handleError = () => {
		if (!fallbackUsed && fallbackSrc && currentSrc !== fallbackSrc) {
			setCurrentSrc(fallbackSrc);
			setFallbackUsed(true);
			return;
		}

		setCurrentSrc("");
	};

	if (!currentSrc) {
		return <div aria-hidden className={placeholderClassName || className} />;
	}

	return (
		<img
			src={currentSrc}
			alt={alt}
			className={className}
			loading={loading}
			decoding={decoding}
			onError={handleError}
			{...props}
		/>
	);
}

export default SafeImage;
