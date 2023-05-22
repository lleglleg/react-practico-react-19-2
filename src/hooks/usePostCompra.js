import { useEffect, useState } from "react";
import axios from 'axios';

const usePostCompra = (API,body) => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
        console.log(API)
        console.log(body)
        response = ''

		// const response = await axios.post(API,body,{headers: {'Content-Type': 'application/json'}});
		// setProducts(response.data);
	}, []);

	return response;
};

export default usePostCompra;