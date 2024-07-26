import HeroSection from "../components/HeroSection";
import MyWork from "../components/MyWork";

function Home() {
    return (
        <main className="mt-[-165px]">
            <HeroSection />
            <MyWork />
            <div className="relative">
                {/* <div className="relative z-10 mx-auto max-w-screen-xl px-4">
                    <h1>Home</h1>
                </div> */}
                <div className="absolute inset-0 z-0 grid grid-cols-2">
                    <div className="bg-gradient-to-r from-orange-200 to-violet-200/0"></div>
                    <div className="bg-gradient-to-r from-orange-100/0 to-violet-200"></div>
                </div>
            </div>
        </main>
    );
}

export default Home;