/* const getData = async () => {
useEffect(() => {
    var API_KEY = '44682680-6945f02c4dccc02031e33e174';
    var URL_BASE = "https://pixabay.com/api/"
        try {
            let response = await fetch(`${URL_BASE}?key=${API_KEY}&q=animals`)
            let result = await response.json()
            console.log(result.hits)
            setData(result.hits)
        } catch (error) {
            console.log(error)
        }
    }
    getData()
}, [])
 */

import { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_API_KEY;
const url_base = import.meta.env.VITE_URL_BASE;

export const useGetImage = (photo_id) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
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
			setError("hubo un error al llamar la api");
			console.log(error);
		}
	};

	useEffect(() => getImage, [photo_id]);

	return { data, loading, error };
};
