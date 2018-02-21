import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppBarExampleIcon from './AppBarExampleIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';




const App = () => (
  <MuiThemeProvider>
    <AppBarExampleIcon/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
