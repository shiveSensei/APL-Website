import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from '../src/theme/theme' //custom theme
import {MuiThemeProvider} from '@material-ui/core'
import 'typeface-roboto'

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root')
);
