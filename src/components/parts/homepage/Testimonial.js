import {} from 'react-bootstrap';
const Testimonial = () => {
    return(
        <section id="testimonial">
        <div>
          <p className="title">Testimonial</p>
          <p className="subtitle">Berbagai review positif dari para pelanggan kami</p>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={require('../../../assets/img/carosel.png')} className="img-fluid rounded-start" alt="photo1" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                        <p className="card-text">"Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore temporibus perferendis accusamus rerum. Pariatur commodi
                          dolorem mollitia numquam nesciunt,
                          officia necessitatibus atque quas quidem itaque alias aliquam. Qui,
                          reprehenderit aperiam."</p>
                        <p className="card-text"><strong>John Dee 32,Bromo</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={require('../../../assets/img/carosel_1.png')} className="img-fluid rounded-start" alt="photo2" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                        <p className="card-text">"Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore temporibus perferendis accusamus rerum. Pariatur commodi
                          dolorem mollitia numquam nesciunt,
                          officia necessitatibus atque quas quidem itaque alias aliquam. Qui,
                          reprehenderit aperiam."</p>
                        <p className="card-text"><strong>John Dee 32,Bromo</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="btn-carousel"><img src={require('../../../assets/img/btn-carousel.png')} /></a>
              <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="btn-carousel"><img src="assets/img/Right button.png" /></a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonial;