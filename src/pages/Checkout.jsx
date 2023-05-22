import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/Checkout.scss';

const Checkout = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.Precio_PR;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<>
		<div className="container-fluid">
			<div className="row px-xl-5">
				<div className="col-lg-8">
				{/*Toda esta informacion tambien debe de ir vinculada a la base de usuarios ya sea rellenarla sola a partir de los datos en la base o llenar la base
						conforme los datos capturados*/}
				<h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Direccion de facturacion</span></h5>
				<div className="bg-light p-30 mb-5">
					<div className="row">
					<div className="col-md-6 form-group">
						<label>Nombre(s)</label>
						<input className="form-control" type="text" placeholder="Juan" />
					</div>
					<div className="col-md-6 form-group">
						<label>Apellidos</label>
						<input className="form-control" type="text" placeholder="Perez" />
					</div>
					<div className="col-md-6 form-group">
						<label>E-mail</label>
						<input className="form-control" type="text" placeholder="ejemplo@email.com" />
					</div>
					<div className="col-md-6 form-group">
						<label>Celular</label>
						<input className="form-control" type="text" placeholder="+52 5512345678" />
					</div>
					<div className="col-md-6 form-group">
						<label>Direccion Linea 1</label>
						<input className="form-control" type="text" placeholder="123 Calle" />
					</div>
					<div className="col-md-6 form-group">
						<label>Direccion Linea 2</label>
						<input className="form-control" type="text" placeholder="123 Calle" />
					</div>
					<div className="col-md-6 form-group">
						<label>País</label>
						<select className="custom-select">
						<option selected>México</option>
						<option>Estados Unidos</option>
						<option>Canada</option>
						<option>Ecuador</option>
						</select>
					</div>
					<div className="col-md-6 form-group">
						<label>Ciudad</label>
						<input className="form-control" type="text" placeholder="Cuautemoc" />
					</div>
					<div className="col-md-6 form-group">
						<label>Estado</label>
						<input className="form-control" type="text" placeholder="CDMX" />
					</div>
					<div className="col-md-6 form-group">
						<label>Codigo postal</label>
						<input className="form-control" type="text" placeholder={54700} />
					</div>
					<div className="col-md-12 form-group">
						<div className="custom-control custom-checkbox">
						<input type="checkbox" className="custom-control-input" id="newaccount" />
						<label className="custom-control-label" htmlFor="newaccount">Crear cuenta</label>
						</div>
					</div>
					</div>
				</div>
				</div>
				<div className="col-lg-4">
				{/*Lo mismo, aqui se deben de mostrar los productos sin detalles solo precio para confirmar la orden, puse 3 pero deberian desplegarse los necesarios*/}
				<h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Total de la orden</span></h5>
				<div className="bg-light p-30 mb-5">
					<div className="border-bottom">
					<h6 className="mb-3">Productos</h6>
					<div className="d-flex justify-content-between">
						<p>Nombre de producto 1</p>
						<p>$150</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Nombre de producto 2</p>
						<p>$150</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Nombre de producto 3</p>
						<p>$150</p>
					</div>
					</div>
					<div className="border-bottom pt-3 pb-2">
					<div className="d-flex justify-content-between mb-3">
						<h6>Subtotal</h6>
						<h6>$150</h6>
					</div>
					<div className="d-flex justify-content-between">
						<h6 className="font-weight-medium">Costo de envío</h6>
						<h6 className="font-weight-medium">$10</h6>
					</div>
					</div>
					<div className="pt-2">
					<div className="d-flex justify-content-between mt-2">
						<h5>Total</h5>
						<h5>{sumTotal()}</h5>
					</div>
					</div>
				</div>
				<div className="mb-5">
					<h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Metodo de pago</span></h5>
					{/*Aqui van las pasarelas de pago, puedes quitar transferencia bancaria si no hay codigo para eso o dejarla nomas pero sin servir*/}
					<div className="bg-light p-30">
					<div className="form-group">
						<div className="custom-control custom-radio">
						<input type="radio" className="custom-control-input" name="payment" id="paypal" />
						<label className="custom-control-label" htmlFor="paypal">Paypal</label>
						</div>
					</div>
					<div className="form-group">
						<div className="custom-control custom-radio">
						<input type="radio" className="custom-control-input" name="payment" id="directcheck" />
						<label className="custom-control-label" htmlFor="directcheck">Pago con tarjeta</label>
						</div>
					</div>
					<div className="form-group mb-4">
						<div className="custom-control custom-radio">
						<input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
						<label className="custom-control-label" htmlFor="banktransfer">Transferencia Bancaria</label>
						</div>
					</div>
					<button className="btn btn-block btn-primary font-weight-bold py-3">Ordenar</button>
					</div>
				</div>
				</div>
			</div>
			</div>

		</>
		// <div className="Checkout">
		// 	<div className="Checkout-container">
		// 		<h1 className="title">My order</h1>
		// 		<div className="Checkout-content">
		// 			<div className="order">
		// 				<p>
		// 					<span>03.25.21</span>
		// 					<span>6 articles</span>
		// 				</p>
		// 				<p>$560.00</p>
		// 			</div>
		// 		</div>
		// 		<OrderItem />
		// 	</div>
		// </div>
	);
}

export default Checkout;
