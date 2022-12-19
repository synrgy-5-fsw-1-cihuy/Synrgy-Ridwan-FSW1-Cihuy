import {} from 'react-bootstrap';
const Our = () => {
    return(
        <section id="our">
        <div className="row mx-auto mt-5">
          <div className="col-md-6">
            <img src={require('../../../assets/img/service.png')} className="service" style={{marginTop: '40px'}} />
          </div>
          <div className="col-md-6 justify-content-center">
            <p className="title">
              Best Car Rental for any kind of trip in Klaten!
            </p>
            <p className="subtitle">
              Sewa mobil di Klaten bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
              kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam illum natus, ducimus
              exercitationem vero nostrum doloremque earum et velit illo aspernatur dolorum iure provident
              saepe non repudiandae cupiditate animi.
            </p>
            <ul className="list-unstyled" id="list">
              <li className="mb-2"><img src={require('../../../assets/img/check.png')} /> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li className="mb-2"><img src={require('../../../assets/img/check.png')} /> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li className="mb-2"><img src={require('../../../assets/img/check.png')} /> Sewa Mobil Jangka Panjang Bulanan</li>
              <li className="mb-2"><img src={require('../../../assets/img/check.png')} /> Gratis Antar - Jemput Mobil di Bandara</li>
              <li className="mb-2"><img src={require('../../../assets/img/check.png')} /> Layanan Airport Transfer/Drop In Out</li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default Our;