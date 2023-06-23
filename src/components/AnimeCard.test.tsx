import React from 'react';

import {render} from '@testing-library/react';
import AnimeCard from './AnimeCard';

test('renders anime card',()=>{
    const title= 'Anime 1';
    render(<AnimeCard title={title}/>);

});