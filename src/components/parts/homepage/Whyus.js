import {} from 'react-bootstrap';

const Whyus = () => {
    return(
        <section id="why">
        <div>
          <h2 style={{marginTop: '150px', paddingLeft: '60px'}}><strong> Why Us?</strong></h2>
          <p className="subtitle">Mengapa harus pilih Binar Car Rental?</p>
          <div className="row mx-5">
            <div className="col-md-3">
              <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                  <img src={require('../../../assets/img/complete.png')} width="32px" height="32px" alt='complete'/>
                  <h5 className="card-title mt-3">Mobil Lengkap</h5>
                  <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                    terawat.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                  <img src={require('../../../assets/img/price.png')} width="32px" height="32px" alt='price'/>
                  <h5 className="card-title mt-3">Harga Murah</h5>
                  <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                  <img src={require('../../../assets/img/hours.png')} width="32px" height="32px" alt='hours'/>
                  <h5 className="card-title mt-3">Layanan 24 Jam</h5>
                  <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                  <img src={require('../../../assets/img/profesional.png')} width="32px" height="32px" alt='prof'/>
                  <h5 className="card-title mt-3">Sopir Profesional</h5>
                  <p className="card-text">Sopir yang profesional, berpengalaman, jujur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Whyus;