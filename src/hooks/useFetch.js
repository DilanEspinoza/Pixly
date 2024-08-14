import { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_API_KEY;
const url_base = import.meta.env.VITE_URL_BASE;

export const useFetch = (query) => {
	const [data, setData] = useState([]);
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getImages = async () => {
			try {
				let response = await fetch(`${url_base}/search?query=${query}`, {
					headers: {
						Authorization: api_key,
					},
				});
				let result = await response.json();
				setData(result.photos);
				// setLoading(false);
			} catch (error) {
				// setLoading(false);
				// setError("hubo un error al llamar la api");
				console.log(error);
			}
		};
		getImages();
	}, [query]);

	// return { data, loading, error };
	return { data };
};
