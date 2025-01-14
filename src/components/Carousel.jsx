import lathe1 from "../img/lathe1.jpeg";
import lathe2 from "../img/lathe2.jpeg";
import lathe3 from "../img/lathe3.jpeg";
import lathe4 from "../img/lathe4.jpeg";
import lathe5 from "../img/lathe5.jpeg";
import lathe6 from "../img/lathe6.jpeg";
import lathe7 from "../img/lathe7.jpeg";

const Carousel = () => {
    return (
        <div className="carousel rounded-box">
            <div className="carousel-item">
                <img src={lathe1} alt="lathe1" />
            </div>
            <div className="carousel-item">
                <img src={lathe2} alt="lathe2" />
            </div>
            <div className="carousel-item">
                <img src={lathe3} alt="lathe3" />
            </div>
            <div className="carousel-item">
                <img src={lathe4} alt="lathe4" />
            </div>
            <div className="carousel-item">
                <img src={lathe5} alt="lathe5" />
            </div>
            <div className="carousel-item">
                <img src={lathe6} alt="lathe6" />
            </div>
            <div className="carousel-item">
                <img src={lathe7} alt="lathe7" />
            </div>
        </div>
    );
};

export default Carousel;
