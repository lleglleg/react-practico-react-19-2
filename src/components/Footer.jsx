import React from "react";

const Footer = () => {
	return (
   
<div>
  <div className="container-fluid bg-light mt-5 py-5">
    <div className="container pt-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Informacion</h5>
          <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2" />Carretera Cuautitlán-Teoloyucan Km. 2.5, Col. San Sebastián Xhala, Cuautitlán Izcalli, Estado de México, CP. 54714</p>
          <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2" />visdreamcontact@gmail.com</p>
          <p className="mb-0"><i className="bi bi-telephone text-primary me-2" />+52 558684 1050</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular</h5>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-body mb-2" href="index.html"><i className="bi bi-arrow-right text-primary me-2" />Inicio</a>
            <a className="text-body mb-2" href="team.html"><i className="bi bi-arrow-right text-primary me-2" />Conoce al equipo</a>
            <a className="text-body mb-2" href="shop.html"><i className="bi bi-arrow-right text-primary me-2" />Catalogo</a>
            <a className="text-body" href="contact.html"><i className="bi bi-arrow-right text-primary me-2" />Contacto</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h6 className="text-uppercase mt-4 mb-3">Siguenos</h6>
          <div className="d-flex">
            <a className="btn btn-outline-primary btn-square me-2" href="#"><i className="bi bi-twitter" /></a>
            <a className="btn btn-outline-primary btn-square me-2" href="#"><i className="bi bi-facebook" /></a>
            <a className="btn btn-outline-primary btn-square me-2" href="#"><i className="bi bi-linkedin" /></a>
            <a className="btn btn-outline-primary btn-square" href="#"><i className="bi bi-instagram" /></a>
          </div>
        </div>
        <div className="col-12 text-center text-body">
          <a className="text-body" href="condic.html">Terminos &amp; Condiciones&gt;</a>
          <span className="mx-1">|</span>
          <a className="text-body" href="priv.html">Politica de privacidad</a>
          <span className="mx-1">|</span>
          <a className="text-body" href="pagos.html">Pagos</a>
          <span className="mx-1">|</span>
          <a className="text-body" href="ayuda.html">Ayuda</a>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-white-50 py-4">
    <div className="container">
      <div className="row g-5">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-md-0">© <a className="text-white" href="#">VISIONARIA DREAMS</a>. Todos los derechos reservados.</p>
        </div>
        <div className="col-md-6 text-center text-md-end">
        </div>
      </div>
    </div>
  </div>
</div>

	);
}

export default Footer;
