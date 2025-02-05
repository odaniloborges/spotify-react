import React from "react";
import './header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header-navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="seta direita" />
                </button>
            </div>

            <div className="header-search">
                <img src={search} alt="" />
                <input id="search-input" type="text" max="800" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="O que você quer ouvir?" value="" />
            </div>

            <div className="header-login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;