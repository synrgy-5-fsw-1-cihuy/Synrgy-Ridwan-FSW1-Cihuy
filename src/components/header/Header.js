import {} from "react-bootstrap";

const Header = () => {
  return (
    <header>
     <section id="nav-top">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#our" style={{color: 'black'}}>Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#why" style={{color: 'black'}}>Why Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonial" style={{color: 'black'}}>Testimonial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq" style={{color: 'black'}}>FAQ</a>
          </li>
          <li className="nav-item nav nav-pills">
            <button type="button" className="btn btn-success">Register</button>
          </li>
        </ul>
      </section>
      <section id="banner">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1>Sewa &amp; Rental Mobil Terbaik di kawasan Klaten</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
              terjangkau. Selalu siap melayani kebutuhanmu
              untuk sewa mobil selama 24 jam.
            </p>
            <button type="button" className="btn btn-success" id="btnsw" href>Mulai Sewa Mobil</button>
          </div>
          <div className="col-md-6">
            <img src={require("../../assets/img/car.png")} className="mobil" style={{maxWidth: '100%', height: 'auto'}} alt='mobil' />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
