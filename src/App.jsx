import Carousel from "./components/Carousel";
import CarouselButtons from "./components/CarouselButtons";
import CustomCard from "./components/CustomCard";
import CustomCard2 from "./components/CustomCard2";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="p-4">
            <div className="mb-24">
                <h1 className="text-center text-4xl font-bold text-white">
                    hello new project
                </h1>
                <Navbar />
            </div>
            <div className="mb-24">
                <Carousel />
            </div>
            <div className="mb-24">
                <CarouselButtons />
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
        </div>
    );
}

export default App;
