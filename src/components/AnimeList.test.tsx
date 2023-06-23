import React from 'react';
import {render } from '@testing-library/react';
import AnimeList from './AnimeList';

test('renders anime list', ()=>{
    render(<AnimeList/>);
});