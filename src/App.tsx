import React from 'react';
import { createBrowserHistory } from "history"; //calling browserHistory

import { Provider } from 'react-redux'; //calling Redux
import { Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Routes from './routes';

import store from './store';


const history = createBrowserHistory();

function App() {
  return(
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router> 
    </Provider>
  );
}

export default App;
