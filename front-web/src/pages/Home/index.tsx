import React from 'react';
import { ReactComponent as ArrowIcon} from '../../assets/Seta.svg'
import { ReactComponent as GarmerImage} from '../../assets/gamer.svg'

import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais jogos a galera gosta mais?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!
            </h3>
            <div className="home-actions">
                <button className="home-btn">
                    QUERO SABER QUAIS SÃO
                </button>
                <div className="home-btn-icon">
                    <ArrowIcon />
                </div>
            </div>
        </div>
        <GarmerImage className="home-image" />
    </div>

);
export default Home; 