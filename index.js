import React from 'react';
import App from './App';
import { renderToString } from "react-dom/server"
import express from 'express';
// const getPage = require('./puppeteer_render.js');

let renderedComponent = renderToString(<App />);

const app = express();

app.use(express.static("assets"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>

      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title></title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
          <link rel="stylesheet" href="TestComponent.css" />
      </head>

      <body>
      ${renderedComponent}
      </body>

      </html>
  `);
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});