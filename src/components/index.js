import React from 'react';
import Logo from '../assets/img/Logo.jpg';
import './Menu.css'
//import Button from '../components/Menu/components/Button';
import Button from '../components/Button'
function Menu(){
    return (
        <header>
            <nav className="Menu">
                <a href="/">
                <img className="Logo" src= {Logo} alt="Cyber-logo"/>    
                </a>

                <Button as="a" className="ButtonLink" href ="/">
                   Novo Vídeo
                </Button>
            </nav>
        </header>
    );
}
export default Menu;