import {} from 'react-bootstrap';

const Faq = () => {
    return(
        <section id="faq">
        <div className="row">
          <div className="col-md-6 mt-5">
            <p className="title">Frequently Asked Question</p>
            <p className="subtitle">lorem ipsum dolor sit amet</p>
          </div>
          <div className="col-md-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum nihil dicta.
                    Libero iste laboriosam inventore debitis repellat, officia autem est ad ea quae
                    ratione. Excepturi commodi aperiam voluptate accusamus!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExampl">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet exercitationem eos
                    mollitia facilis neque ducimus cum ipsum sit architecto, cumque labore culpa fugit!
                    Nulla consequatur mollitia nemo soluta animi dicta!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus itaque
                    neque repellat consequuntur harum enim, quis nostrum iure velit veritatis autem,
                    laudantium impedit excepturi libero blanditiis aliquid. Amet, optio?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, placeat
                    reprehenderit fugiat impedit expedita ex natus quod quas a fuga, ullam dolor
                    accusantium. Maiores nobis quae velit dolore eligendi.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cupiditate. Minus
                    mollitia ipsa error consequatur quod tenetur placeat aperiam nihil, nobis non et eos
                    facilis sapiente, dignissimos autem. Placeat, sit?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Faq;