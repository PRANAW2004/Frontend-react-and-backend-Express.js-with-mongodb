import React from 'react';
import Front from './Frontpage';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './dashboard';
function App(){
   return(
    <div>
    <Router>
        <Routes>
            <Route exact path='/dashboard' Component={Dashboard} />
            <Route exact path='/register' Component={Front} />
        </Routes>
    </Router>
    </div>
   )
}
export default App;