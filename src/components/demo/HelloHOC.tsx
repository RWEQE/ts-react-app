import React, { Component } from 'react';
import HelloClass from './HelloClass';

// 高阶组件
// 参数是需要被包装的组件

interface Loading {
  loading: boolean;
}

function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) { // 这里的ComponentType既可以是类组件 也可以是函数组件 P表示被包装的组件的参数的类型
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <div>Loading...</div> : <WrappedComponent {...props as P} />
    }
  }
}

export default HelloHOC(HelloClass);