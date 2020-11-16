/* eslint-disable no-unused-vars */
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from '../helpers/renderer';
import createStore from '../../store/createStore';
import Routes from '../../client/Routes';


const serverRouter = express.Router();
serverRouter.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];
  const store = createStore();
  // We pass store to renderer

  // Passing client routes
  const routes = matchRoutes(Routes, req.path);

  // Handling of promise for Url
  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, id) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  // Handle all promises
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

export default serverRouter;

