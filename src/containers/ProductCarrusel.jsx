import React from 'react';
import AppContext from '../context/AppContext';
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'http://tldsd-gb.tline.com/dsd/api/productos';

const ProductList = () => {
    // const { addToCart } = useContext(AppContext);
	const products = useGetProducts(API);
    
    const[imagenActual , setImagenActual] = React.useState(0);
    const cantidad = products?.length;

    // if(!Array.isArray(products) || cantidad == 0)
    //     return;

    const siguienteImagen = ()=>{
        setImagenActual(imagenActual === cantidad -1 ? 0 : imagenActual + 1)
    }

    const anteriorImagen = ()=>{
        setImagenActual(imagenActual === 0 ? cantidad -1 : imagenActual - 1)
    }

	const handleClick = item => {
		addToCart(item);
	}


	return (

 <div className="container-fluid py-5">
  <div className="container">
    <div className="border-start border-5 border-primary ps-5 mb-5">
        <h6 className="text-primary text-uppercase">Conoce</h6>
        <h1 className="display-5 text-uppercase mb-0">Productos populares</h1>
        </div>
    <div className="owl-carousel product-carousel">
        <button onClick={anteriorImagen}>←</button>
        {products.map((product , index) => (
                    <div>{imagenActual === index && ( 
                        <div className="pb-5">
                            <div className="product-item position-relative bg-light d-flex flex-column text-center" width={165} height={165} style={{height: 350}}>
                                <img className="img-fluid mb-4" src={product.Imagen_PR} alt style={{width: '100%', height: '80%'}} />
                                <h6 className="text-uppercase">{product.Nombre_PR}</h6>
                                <h5 className="text-primary mb-0">${product.Precio_PR}</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn btn-primary py-2 px-3" href  ><i className="bi bi-cart" />🛒</a>
                                    <a className="btn btn-primary py-2 px-3" href><i className="bi bi-eye" />👁</a>
                                </div>
                            </div>
                        </div>

                    // <img key={index} src={product.Imagen_PR} alt="imagen" />
                    
                    )}
                    </div>
                        // <ProdductItemCarrusel product={product} key={product.ID_PR} />
                    ))}
        <button onClick={siguienteImagen}>→</button>
    </div>
  </div>
</div>

	);
}

export default ProductList;