import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
	<Router>
		<div>
            <Route exact path="/" component={Login} />
            <Route exact path="/App" component={App}/>
        </div>
    </Router>
    , document.getElementById('root')
);

registerServiceWorker();