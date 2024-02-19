import React from 'react';
import '../assets/styles/TankTalkerAI.css'
import '../assets/styles/Home.css'
import logoImage from '../assets/images/logo.png'
import bannerImage from '../assets/images/home-banner.png'
import Header from "./shared/Header";
import TankTalkerInterface from "./shared/TankTalkerInterface";

const TankTalkerAI = () => {
    return (
        <div>
            <Header />
        <main>
            <section>
                <div>
                    <TankTalkerInterface />
                </div>
            </section>
        </main>
        </div>
    );
};

export default TankTalkerAI;