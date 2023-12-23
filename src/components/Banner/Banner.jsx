
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/MPZ3Xwq/mobile-hut.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Mobile Experience at Mobile Hut</h1>
                    <p className="mb-5">Explore a curated collection of the latest smartphones, cutting-edge technology, and unbeatable deals. Find the mobile that suits your lifestyle and unlocks a world of possibilities. Welcome to Mobile Hut, where innovation meets affordability!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;