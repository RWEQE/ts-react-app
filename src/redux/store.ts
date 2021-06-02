import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer'

const store = createStore(rootReducer,  // 第一个参数：整个应用所有 reducer的集合
  compose(
    applyMiddleware(thunk) // 组合中间件 异步action
  )
);

export default store;