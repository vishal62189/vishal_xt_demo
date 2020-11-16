/* eslint-disable no-unused-vars */
import '@babel/polyfill';
import express from 'express';
import serverRouter from "./routes";
import compression from 'compression';

const app = express();

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

app.use(
  compression({
    level: 2,
    filter: shouldCompress
  })
);

const port = process.env.PORT || 5000;
// To serve static files
app.use(express.static('public'));
//serverRouter
app.use("*", serverRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
