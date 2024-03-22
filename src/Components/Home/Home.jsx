import { Outlet } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;