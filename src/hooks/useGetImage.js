import { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_API_KEY;
const url_base = import.meta.env.VITE_URL_BASE;

export const useGetImage = (photo_id) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getImage = async () => {
			try {
				let response = await fetch(`${url_base}/photos/${photo_id}`, {
					headers: {
						Authorization: api_key,
					},
				});
				let result = await response.json();
				setData(result);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError("hubo un error al intentar cargar la imagen");
				console.log(error);
			}
		};
		getImage();
	}, [photo_id]);

	return { data, loading, error };
};
