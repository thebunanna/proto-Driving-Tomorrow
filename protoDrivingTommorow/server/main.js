import { Meteor } from 'meteor/meteor';



import React from 'react';
import ReactDOM from 'react-dom';

import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";
/*
const app = express();
app.get( "/*", ( req, res ) => {
    const jsx = ( <App /> );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );
app.listen( 3000 );

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
}*/
//
//registerServiceWorker();
