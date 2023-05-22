import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
        <div className="pb-5">
            <div className="product-item position-relative bg-light d-flex flex-column text-center" width={165} height={165} style={{height: 350}}>
                <img className="img-fluid mb-4" src={product.Imagen_PR} alt style={{width: '100%', height: '80%'}} />
                <h6 className="text-uppercase">{product.Nombre_PR}</h6>
                <h5 className="text-primary mb-0">${product.Precio_PR}</h5>
                <div className="btn-action d-flex justify-content-center">
                    <a className="btn btn-primary py-2 px-3" href onClick={() => handleClick(product)} ><i className="bi bi-cart" />🛒</a>
                    <a className="btn btn-primary py-2 px-3" href><i className="bi bi-eye" /></a>
                </div>
            </div>
        </div>
		// <div className="ProductItem">
		// 	<img src={product.Imagen_PR} alt={product.Nombre_PR}/>
		// 	<div className="product-info">
		// 		<div>
		// 			<p>${product.Precio_PR}</p>
		// 			<p>{product.Nombre_PR}</p>
		// 		</div>
		// 		<figure onClick={() => handleClick(product)} >
		// 			<img src={addToCartImage} alt="" />
		// 		</figure>
		// 	</div>
		// </div>
	);
}

export default ProductItem;
