import React, { useContext , useState ,useEffect} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import usePostCompra from '../hooks/usePostCompra';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const API = 'http://tldsd-gb.tline.com/dsd/api/order';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const [postId, setPostId] = useState(null);

	useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"order":{"user": 1 },"products":state.cart})
        };
        fetch(API, requestOptions)
            .then(response => response.json())
            .then(data => {
				console.log(data);
				setPostId(data)
			});

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.Precio_PR;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	const handleSubmit = (event) => {
		let resp = usePostCompra(API,state.cart);
		console.log(resp);
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.ID_PR}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button  onClick={handleSubmit} className="primary-button">
				{/* <a href="/checkout" onClick={handleSubmit} state={state} >Checkout</a> */}
				Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
