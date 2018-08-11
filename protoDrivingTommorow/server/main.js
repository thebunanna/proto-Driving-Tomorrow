import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import express from "express";
import path from "path";
import registerServiceWorker from './registerServiceWorker';
import { renderToString } from "react-dom/server";

const app = express();
app.get( "/*", ( req, res ) => {
    const jsx = ( <App /> );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );
app.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
