import React, { useState, useEffect } from 'react'
import { Button } from 'antd';

interface Greeting {
  name: string,
  firstName: string,
  lastName: string
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);
  const [text, setTest] = useState<string | null>(null)
  useEffect(()=>{
    if (count > 5) {
      setTest('休息一下')
    }
  }, [count])
  return (
    <>
      <p>你点击了 {count}次, {text}</p>
      <Button onClick={() => setCount(count + 1)}>Hello, {props.name}</Button>
    </>
  )
}

// 使用FC的好处： 2. 给函数定义 静态属性的时候 会给一些默认的提示
// 总结： 没有明显的好处，建议弃用，使用常规的定义 函数组件的方法
HelloHooks.defaultProps = {
  firstName: "",
  lastName: "",
}

export default HelloHooks;