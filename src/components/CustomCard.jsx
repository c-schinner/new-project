import lathe1 from "../img/lathe1.jpeg";

const CustomCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl w-full">
            <div className="card-body">
                <h2 className="card-title">Somthing goes here!</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <figure>
                <img src={lathe1} alt="random image" />
            </figure>
        </div>
    );
};

export default CustomCard;
