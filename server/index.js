const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();
app.use(morgan('dev'));

// Configuration
const PORT = 1337;
const images = 'http://3.21.104.189:8080';
const addtocart = 'http://13.52.238.216:3000';
const reviews = 'http://3.233.240.212:1128';

app.use(express.static('client/dist'));

// Proxy endpoints

app.use(
  '/addtocart',
  createProxyMiddleware({
    target: addtocart,
    changeOrigin: true
  })
)

app.use(
  '/images',
  createProxyMiddleware({
    target: images,
    changeOrigin: true
  })
)

app.use(
  '/reviews',
  createProxyMiddleware({
    target: reviews,
    changeOrigin: true
  })
)

// Start the Proxy
app.listen(PORT, () => {
  console.log(`Starting Proxy at localhost:${PORT}`);
});





