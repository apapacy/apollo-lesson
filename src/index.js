import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

hydrate(<App />, document.getElementById('app'));
// registerServiceWorker();
