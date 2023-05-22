import React from 'react';

const Video = () => {

	return (
        <>


        <div>
        
        <link href="img/favicon.ico" rel="icon" />
       
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@700&display=swap" rel="stylesheet" />  
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
        
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        
        <link href="css/bootstrap.min.css" rel="stylesheet" />
      
        <link href="css/style.css" rel="stylesheet" /> */}
        </div>






        <div className="container-fluid py-5">
            <div className="container">
                <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: 500}}>
                    <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src="img/about2.jpg" style={{objectFit: 'cover'}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="border-start border-5 border-primary ps-5 mb-5">
                    <h6 className="text-primary text-uppercase">Realidad Virtual</h6>
                    <h1 className="display-5 text-uppercase mb-0">Ve mas alla de tu propia realidad</h1>
                    </div>
                    <h4 className="text-body mb-4">Conoce las diferencias entre realidad virtual y realidad aumentada</h4>
                    <div className="bg-light p-4">
                    <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item w-50" role="presentation">
                        <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">Realidad virtual</button>
                        </li>
                        <li className="nav-item w-50" role="presentation">
                        <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">Realidad aumentada</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                        <p className="mb-0">Este tipo de realidad te sumerge por completo en un mundo nuevo generado usualmente en una gafas que aislan tus sentidos para que disfrutes de sensaciones completamente nuevas ya sea para jugar o aprender</p>
                        </div>
                        <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                        <p className="mb-0">Con las herrmientas que nos brindan este tipo de realidad puedes ver el mundo real pero con representaciones generadas por computadora que enriquecen el entorno en el que te encuentres, puedes ver cosas que no hay en el mundo real a traves de tus lentes</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {/* 16:9 aspect ratio */}
                        <div className="ratio ratio-16x9">
                        <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            

            <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5">
                <h6 className="text-primary text-uppercase">Nosotros</h6>
                <h1 className="display-5 text-uppercase mb-0">¿A que nos dedicamos?</h1>
                </div>
                <div className="row g-5">
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                    <img src="lib/flaticon/003-centro-de-distribucion.png" alt style={{width: 100, height: 100, padding: 10}} />
                    <div>
                        <h5 className="text-uppercase mb-3">Distribución</h5>
                        <p>Conseguimos los productos a mayoreo con los mejores proveedores para ofrecerte el mejor precio</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                    <img src="lib/flaticon/002-lista.png" alt style={{width: 100, height: 100, padding: 10}} />
                    <div>
                        <h5 className="text-uppercase mb-3">Seguimiento</h5>
                        <p>Nos aseguramos que tu pedido llegue en las mejores condiciones posibles y de manera rapida</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                    <img src="lib/flaticon/004-fcil-instalacin.png" alt style={{width: 100, height: 100, padding: 10}} />
                    <div>
                        <h5 className="text-uppercase mb-3">Instalacion</h5>
                        <p>Te ayudamos con la instalacion en caso de que lo necesites por una pequeña cuota extra</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                    <img src="lib/flaticon/001-garanta.png" alt style={{width: 100, height: 100, padding: 10}} />
                    <div>
                        <h5 className="text-uppercase mb-3">Garantia</h5>
                        <p>Te damos 30 dias de garantia directamente con nosotros por cualquier falla de fabrica</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>









            <div className="container-fluid bg-testimonial py-5" style={{margin: '45px 0'}}>
            <div className="container py-5">
                <div className="row justify-content-end">
                <div className="col-lg-7">
                    <div className="owl-carousel testimonial-carousel bg-white p-5">
                    <div className="testimonial-item text-center">
                        <div className="position-relative mb-4">
                        <img className="img-fluid mx-auto" src="img/testimonial-1.jpg" alt />
                        <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style={{width: 45, height: 45}}>
                            <i className="bi bi-chat-square-quote text-primary" />
                        </div>
                        </div>
                        <p>Pagina confiable, entrega muy rapida</p>
                        <hr className="w-25 mx-auto" />
                        <h5 className="text-uppercase">Emmanuel Castrejon</h5>
                        <span>Scrum master</span>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="position-relative mb-4">
                        <img className="img-fluid mx-auto" src="img/testimonial-2.jpg" alt />
                        <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style={{width: 45, height: 45}}>
                            <i className="bi bi-chat-square-quote text-primary" />
                        </div>
                        </div>
                        <p>Todo llego en perfectas condiciones e incluyeron un pequeño regalo</p>
                        <hr className="w-25 mx-auto" />
                        <h5 className="text-uppercase">Jair Lopez</h5>
                        <span>Estudiante</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>






        </>
	);
}

export default Video;