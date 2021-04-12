import React from 'react';
import { Route , Switch } from 'react-router-dom';


import Userlist from './Userlist';
import Adduser from './Adduser';
import Admin from './Admin';
import Edit from './Edit';

const App = () =>{
    return(
        <>
        <Switch>
            <Route exact path='/' component={Userlist} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/add' component={Adduser} />
            <Route exact path='/edit/:key' component={Edit} />
        </Switch>
        </>
    );
};


export default App;
