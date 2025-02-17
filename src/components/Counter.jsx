import React, {useState} from 'react'

const Counter = () => {
  let [counter, setCounter] = useState(0)
  return (
    <div>
        <p>Button Clicked {counter} times</p>
        <button onClick={()=> setCounter(counter+1)}>Click Me</button>
    </div>
  )
}

export default Counter