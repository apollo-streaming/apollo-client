import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares, logger)
        )
      : applyMiddleware(...middlewares, logger);

  return createStore(reducers, enhancer);
};
