const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();
app.use(morgan('dev'));

// Configuration
const PORT = 1337;
const HOST = "localhost";

app.use(express.static('client/dist'));

// Proxy endpoints

app.use(
  '/addtocart',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true
  })
)

app.use(
  '/images',
  createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true
  })
)

app.use(
  '/findOne',
  createProxyMiddleware({
    target: 'http://localhost:1128',
    changeOrigin: true
  })
)

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});




