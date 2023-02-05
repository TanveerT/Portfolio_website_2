import React, { useState, useEffect } from "react";

const UseMediaQuery = (query) => {
	const mediaMatch = window.matchMedia(query);
	const [matches, setMatches] = useState(mediaMatch.matches);

	useEffect(() => {
		const handler = (e) => setMatches(e.matches);
		mediaMatch.addEventListener("change", handler);
		return () => mediaMatch.removeEventListener("change", handler);
	});

	return matches;
};

export default UseMediaQuery;
