import React from 'react ';

interface AnimeCardProps{
    title:string;
}

const AnimeCard:React.FC<AnimeCardProps>= ({title})=>{
    return(
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default AnimeCard;
