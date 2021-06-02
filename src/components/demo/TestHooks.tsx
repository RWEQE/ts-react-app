import React, { useContext } from 'react'
import { CountContent } from './context-hooks'

function TestHooks () {
  const countHooks: number = useContext(CountContent)
  return (
    <div>
      <p>{countHooks}</p>
      <p>React Hooks Test</p>
    </div>
  )
}

export default TestHooks;