import React from 'react';
import AnimeCard from '/AnimeCard';

const AnimeList: React.Fc =()=>{
    const animes=[
        {
            id:1,title:'Anime 1' },
           { id:2,title:'Anime 2' },
           { id:3,title:'Anime 3' },
    ];

    return(
        <div>
            {animes.map((anime)=>(
                <AnimeCard key={anime.id} title={anime.title}/>
            ))}
        </div>
    );
};
export default AnimeList;