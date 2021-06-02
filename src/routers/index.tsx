import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../components/app';

const Root = () => (
  // BrowserRouter: 使用history模式
  <BrowserRouter> 
    <Route path="/*" component={App} />
  </BrowserRouter>
)

export default Root;