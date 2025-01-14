import lathe2 from "../img/lathe2.jpeg";

const CustomCard2 = () => {
    return (
        <div className="card bg-base-100 image-full w-full shadow-xl">
            <figure>
                <img src={lathe2} alt="random image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Title</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    );
};

export default CustomCard2;
