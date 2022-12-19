import Header from "../header/Header";
import Our from "../parts/homepage/Our";
import Rent from "./homepage/Rent";
import Testimonial from "./homepage/Testimonial";
import Whyus from "./homepage/Whyus";
import Footer from "../footer/Footer";
import Faq from "./homepage/Faq";

const Home = () => {
    return(
        <>
        <Header />
        <Our />
        <Whyus />
        <Testimonial />
        <Rent />
        <Faq />
        <Footer />
        </>
    )
}

export default Home;