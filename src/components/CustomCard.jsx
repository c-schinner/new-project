import lathe1 from "../img/lathe1.jpeg";

const CustomCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl w-full">
            <div className="card-body">
                <h2 className="card-title">Somthing goes here!</h2>
                <p>Info about something</p>
            </div>
            <figure>
                <img src={lathe1} alt="random image" />
            </figure>
        </div>
    );
};

export default CustomCard;
