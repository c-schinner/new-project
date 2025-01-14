import lathe1 from "../img/lathe1.jpeg";
import lathe2 from "../img/lathe2.jpeg";
import lathe3 from "../img/lathe3.jpeg";
import lathe4 from "../img/lathe4.jpeg";
import lathe5 from "../img/lathe5.jpeg";
import lathe6 from "../img/lathe6.jpeg";
import lathe7 from "../img/lathe7.jpeg";

const Carousel2 = () => {
    return (
        <div className="carousel carousel-center bg-neutral rounded-box w-full h-72 space-x-4 p-4">
            <div className="carousel-item">
                <img src={lathe1} className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img src={lathe2} className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img src={lathe3} className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img src={lathe4} className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img src={lathe5} className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img src={lathe6} className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img src={lathe7} className="rounded-box" />
            </div>
        </div>
    );
};

export default Carousel2;
