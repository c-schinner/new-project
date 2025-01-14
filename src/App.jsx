import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import Collapse from "./components/Collapse";
import CustomCard from "./components/CustomCard";
import CustomCard2 from "./components/CustomCard2";
import Footer from "./components/Footer";
import GoogleMap from "./components/GoogleMap";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

function App() {
    return (
        <div className="p-4" data-theme="mytheme">
            <div className="mb-48">
                <h1 className="text-center text-4xl font-bold text-black mb-24">
                    hello new project
                </h1>
                <Navbar />
                <Navbar2 />
            </div>
            <div className="mb-48">
                <Carousel />
            </div>
            <div className="mb-48">
                <Carousel2 />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 gap-4 mb-48">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 gap-4 mb-48">
                <CustomCard2 />
                <CustomCard2 />
                <CustomCard2 />
                <CustomCard2 />
            </div>
            <div className="mb-48">
                <Accordion />
            </div>
            <div className="mb-48">
                <Collapse />
            </div>
            <div className="mb-24">
                <GoogleMap />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
