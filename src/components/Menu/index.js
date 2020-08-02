import React from 'react';
import Logo from '../../assets/img/Logo.jpg';
import './Menu.css'
import { Link } from 'react-router-dom';
import Button from '../Button'

function Menu(){
    return (
        <header>
            <nav className="Menu">
                
                <img className="Logo" src= {Logo} alt="Cyber-logo" to ='/'/>
                  
                <Button as={Link} className="ButtonLink" to ="/cadastro/video">
                   Novo Vídeo
                </Button>
            </nav>
        </header>
    );
}
export default Menu;