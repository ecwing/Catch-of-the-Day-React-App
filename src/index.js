//component - resusable pieces of code that we are going to use in our app over and over again as well as attach data and event listeners in your website

//webpack - index.js and bundle it into one big file

//every class in react needs at least one method - Render - what HTML do i need to put on the page or what DOM elements do i render out on the page?

//react DOM - 

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Router from "./components/Router";
import './css/style.css';

render(<Router />, document.querySelector('#main'));
