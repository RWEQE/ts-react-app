import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC'
// import HelloHooks from './components/demo/HelloHooks'
// import App from './components/app'
import Root from './routers';
import store from './redux/store';

import 'antd/dist/antd.css'; 

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello name='typescript' firstName='li' lastName='weiyu' />
    <HelloClass name="typescriptclass" /> */}
    {/* <HelloHOC name="typescriptclasshoc" loading={false} /> */}
    {/* <HelloHooks name="typescriptclasshooks" /> */}
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.querySelectorAll('.app')[0]
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
