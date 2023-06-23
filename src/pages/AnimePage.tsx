import React from 'react';

interface AnimePageProps{
    animeId: number;
}
const AnimePage:React.FC<AnimePageProps>=({animeId})=>{
     // Lógica para obter informações detalhadas do anime com o ID fornecido
return(
    <div>
        <h2>Detalhes do anime</h2>
    
    </div>
);
};
export default AnimePage;
