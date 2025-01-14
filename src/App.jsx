import Carousel from "./components/Carousel";
import CarouselButtons from "./components/CarouselButtons";
import CustomCard from "./components/CustomCard";
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 lg:gird-cols-4 gap-4">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
        </div>
    );
}

export default App;
