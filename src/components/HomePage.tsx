import React from 'react';
import Animelist from '../components/AnimeList';

const HomePage: React.FC =()=>{
    return(
        <div>
            <h1>Meus Animes favoritos</h1>

            <Animelist/> 
        </div>
    );
};

export default HomePage;