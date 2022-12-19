import {} from 'react-bootstrap';
const Footer = () => {
    return(
        <footer>
        <div className="row">
          <div className="col-md-3" id="alamat">
            <p>
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-344-808</p>
          </div>
          <div className="col-md-3" id="navigation">
            <p><strong>Our services</strong></p>
            <p><strong>Why Us</strong></p>
            <p><strong>Testimonial</strong></p>
            <p><strong>FAQ</strong></p>
          </div>
          <div className="col-md-3">
            <p>Connect with us</p>
            <div className="container">
              <div className="row row-cols-auto">
                <div className="col">
                  <a href="www.facebook.com"><img src={require('../../assets/img/icon_facebook.png')} width="32px" height="32px" /></a>
                </div>
                <div className="col">
                  <a href="www.instagram.com"><img src={require('../../assets/img/icon_mail.png')} width="32px" height="32px" /></a>
                </div>
                <div className="col">
                  <a href="www.twitter.com"><img src={require('../../assets/img/icon_twitch.png')} width="32px" height="32px" /></a>
                </div>
                <div className="col">
                  <a href="www.mail.goole.com"><img src={require('../../assets/img/icon_twitter.png')} width="32px" height="32px" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p>Copyright Binar 2022</p>
            <img src />
          </div>
        </div>
      </footer>
    );
}

export default Footer;