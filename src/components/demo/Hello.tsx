import React, { useState } from 'react'
import { Button } from 'antd';
import TestHooks from './TestHooks'
import { CountContent } from './context-hooks'

interface Greeting {
  name: string,
  firstName: string,
  lastName: string
}

const Hello = (props: Greeting) => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <Button onClick={()=>setCount(count + 1)}>Hello, {props.name}</Button>
        <CountContent.Provider value={count}>
          <TestHooks />
        </CountContent.Provider>
      </div>
    )
  }

// const Hello: React.FC<Greeting> = ({ // 使用FC的好处： 1.会在函数组件的参数中 隐含声明了children
//   name,
//   firstName,
//   lastName,
// }) => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Button onClick={()=>setCount(count + 1)}>Hello, {name}</Button>
//       <CountContent.Provider value={count}>
//         <TestHooks />
//       </CountContent.Provider>
//     </div>
//   )
// }

// 使用FC的好处： 2. 给函数定义 静态属性的时候 会给一些默认的提示
// 总结： 没有明显的好处，建议弃用，使用常规的定义 函数组件的方法
Hello.defaultProps = {
  firstName: "",
  lastName: "",
}

export default Hello;