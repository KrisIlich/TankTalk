import React from 'react';
import '../assets/styles/Home.css'
import bannerImage from '../assets/images/home-banner.png'
import Header from "./shared/Header";

const Home = () => {
    return (
        <div className="home">
            <Header />

            {/* Main Content */}

            <main className="home-main">
                {/*Large Text and Call to Action*/}
                <section className="main-content" style={{ backgroundColor: '#0E1C36'}}>
                    <div className="body-title">Dive into TankTalk: Your Aquarium Community and Analytics Hub</div>
                    <div className="body-text">Discover a world where tracking your aquarium is effortless, advice is just a chat away, and a community of fellow enthusiasts is always ready to share insights. </div>
                    {/*<button className="cta">Get Started</button>*/}
                    <div className="email-signup">
                        <input className="input-form-text" type="email" placeholder="Enter Your Email Address" />
                        <button>Sign up for Free!</button>
                    </div>
                </section>

                <section className="home-banner-container">
                        <img src={bannerImage} alt="Home Page Banner" className="home-page-banner"/>
                </section>

                <section className="icon-home-section1">
                    <div className="icon1-home">Icon 1</div>
                    <div className="icon2-home">Icon 2</div>
                    <div className="icon3-home">Icon 3</div>
                    <div className="icon4-home">Icon 4</div>
                </section>

                <section className="final-cta">
                    <button className="cta">Get Started</button>
                </section>
            </main>

            {/*Footer*/}
            <footer className="home-footer">
                Footer Content and placeholders
            </footer>

        </div>
    );
};

export default Home;