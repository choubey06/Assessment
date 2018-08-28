import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/header';
import Login from './Login/login';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('root1'));
