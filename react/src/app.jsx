import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';
import { NavbarContainer } from "./containers/NavbarContainer.jsx";

const navbarDomContainer = document.querySelector('#navbar');
ReactDOM.render(
    (<NavbarContainer />),
    navbarDomContainer
);