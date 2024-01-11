const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUT SHOES. YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
                <div className="hero-button">
                    <button className="b1">Show Now</button>
                    <button className="b2">Category</button>
                </div>
                <div className="aftertext">
                    <p>Also Available On</p>
                    <div className="shops">
                        <img src=".\images\flipkart.jpg" alt="flipkart" />
                        <img src=".\images\amazon.jpg" alt="amazon" />
                    </div>
                </div>
                
            </div>
            <div className="hero-image">
                <img src=".\images\shoe_image.jpg" alt="shoe" />
            </div>
        </main>
    )
}

export default Hero;