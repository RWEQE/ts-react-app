import React, { Component } from 'react'
import { Button } from 'antd';

interface Greeting {
  name: string,
  firstName?: string,
  lastName?: string
}

interface State {
  count: number
}

// Component 是一个泛型类 有三个参数，第一个是 属性的类型，默认空对象，第二个是 状态的类型，默认空对象，第三个不用管
class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  }
  static defaultProps = { // 默认值
    firstName: "",
    lastName: ""
  }
  render() {
    return (
      <>
        <p>你点击了 {this.state.count}次</p>
        <Button onClick={() => {this.setState({count: this.state.count + 1})}}>Hello, {this.props.name}</Button>
      </>
    )
  }
}

export default HelloClass;