import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import CustomCard from "./components/CustomCard";
import CustomCard2 from "./components/CustomCard2";
import GoogleMap from "./components/GoogleMap";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

function App() {
    return (
        <div className="p-4" data-theme="mytheme">
            <div className="mb-24">
                <h1 className="text-center text-4xl font-bold text-black mb-24">
                    hello new project
                </h1>
                <Navbar />
                <Navbar2 />
            </div>
            <div className="mb-24">
                <Carousel />
            </div>
            <div className="mb-24">
                <Carousel2 />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 gap-4 mb-24">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 gap-4 mb-24">
                <CustomCard2 />
                <CustomCard2 />
                <CustomCard2 />
                <CustomCard2 />
            </div>
            <div>
                <GoogleMap />
            </div>
        </div>
    );
}

export default App;
