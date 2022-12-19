import Header from "../header/Header";
import Footer from "../footer/Footer";
import {} from "react-bootstrap";
// import '../../assets/css/style.css';
import "../../assets/css/cari.mobil.style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Card, Col, Button } from "react-bootstrap";

const CARS_ENDPOINT_URL = "http://localhost:8001/api/cars";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filterCarParams, setFilterCar] = useState({});

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = async () => {
    const cars = await axios.get(CARS_ENDPOINT_URL);
    console.log(cars.data.data);
    setCars(cars.data.data);
  };

  const onFilterCarCapacityParam = async (event) => {
    const capacityParam = event.target.value;

    if (capacityParam === null || capacityParam === "") {
      getAllCars();
    }

    setFilterCar((prevState) => ({
      ...prevState,
      capacity: capacityParam,
    }));
  };

  const onFilterCarBookingDateParam = async (event) => {
    const bookingDateParam = event.target.value;

    if (bookingDateParam === null || bookingDateParam === "") {
      getAllCars();
    }

    setFilterCar((prevState) => ({
      ...prevState,
      booking_date: event.target.value,
    }));
  };

  const onFilterCarBookingTimeParam = async (event) => {
    const bookingTimeParam = event.target.value;

    if (bookingTimeParam === null || bookingTimeParam === "") {
      getAllCars();
    }

    setFilterCar((prevState) => ({
      ...prevState,
      booking_time: event.target.value,
    }));
  };

  const onEventSubmitFilter = (event) => {
    if (
      filterCarParams.booking_date != null &&
      filterCarParams.booking_time != null
    ) {
      const bookingDateParam =
        filterCarParams.booking_date +
        "T" +
        filterCarParams.booking_time +
        ":00Z";

      console.log(bookingDateParam);

      setFilterCar((prevState) => ({
        ...prevState,
        booking_date_parsed: bookingDateParam,
      }));
    }

    onShowFilterCars(filterCarParams);
    console.log(filterCarParams);

    event.preventDefault();
  };

  const onShowFilterCars = async (filter) => {
    if (filter.capacity != null) {
      const cars = await axios.get(
        CARS_ENDPOINT_URL + "?capacity=" + filter.capacity
      );
      setCars(cars.data.data);
    }

    if (filter.booking_date_parsed != null) {
      const filterCarsBookingDate = await axios.get(
        CARS_ENDPOINT_URL + "?bookingDate=" + filter.booking_date_parsed
      );
      setCars(filterCarsBookingDate.data.data);
    }
  };

  return (
    <>
      <Header />
      <section className="shape-search bg-white" id="search">
        {/* <div class="slider-shape"></div> */}
        <div className="container px-4 py">
          <form onSubmit={(event) => onEventSubmitFilter(event)} >
            <div className="row search-inner bg-white d-flex">
             
              <div className="input-group col-md-6">
                <label>Tanggal</label>
                <i className="fa fa-calendar" />
                <input
                  onChange={(event) => onFilterCarBookingDateParam(event)}
                  type="date"
                  name="tipe-driver"
                  placeholder="Pilih Tanggal"
                />
              </div>
              <div className="input-group">
                <label>Waktu Jemput/Ambil</label>
                <i className="fa fa-clock-o" />
                <select onChange={(event) => onFilterCarBookingTimeParam(event)} className="form-control">
                  <option>Pilih waktu jemput</option>
                  <option value="08:00">08.00</option>
                  <option value="09:00">09.00</option>
                  <option value="10:00">10.00</option>
                  <option value="11:00">11.00</option>
                  <option value="12:00">12.00</option>
                </select>
              </div>
              <div className="input-group">
                <label>Jumlah Penumpang (optional)</label>
                <i className="fa fa-user" />
                <input
                  type="number"
                  onChange={(event) => onFilterCarCapacityParam(event)}
                  placeholder="Jumlah Penumpang"
                />
              </div>
              <div className="input-group">
                <button
                  id="btn-filter"
                  type="submit"
                  className="btn btn-success"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Row>
        {cars.map((car, index) => {
          return (
            <Col>
              <Card key={index} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={car.foto} />
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <b>
                    <p>Rp. {car.price}</p> / hari
                  </b>
                  <Card.Text>Capacity {car.capacity}</Card.Text>

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Footer />
    </>
  );
};

export default Cars;
