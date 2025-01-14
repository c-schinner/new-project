import Carousel from "./components/Carousel";
import CarouselButtons from "./components/CarouselButtons";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <div>
                <h1 className="text-center text-4xl font-bold text-white">
                    hello new project
                </h1>
                <Navbar />
            </div>
            <div>
                <Carousel />
            </div>
            <div>
                <CarouselButtons />
            </div>
        </>
    );
}

export default App;
