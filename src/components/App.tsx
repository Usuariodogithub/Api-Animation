import React from 'react';

import {BrouserRouter as Router, Switch,Route} from 'react-router-dom ';

import Home from '../pages/Home';

import AnimePage from '../pages/AnimePage';

const App:React.FC=()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/anime/:id" component={AnimePage} />
                
            </Switch>
        </Router>
    );
};
    
export default App;
