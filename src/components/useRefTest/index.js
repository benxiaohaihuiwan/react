import { useRef } from "react"

const UseRefTest = ()=>{
  const h1Ref = useRef()
  const updateUseRef = ()=>{
    const h1 = document.getElementById('h1')

    console.log(h1===h1Ref.current,h1Ref.current)
  }
  return (
    <div>
      <h1 id="h1" ref={h1Ref}>this is a useRef</h1>
      <button onClick={updateUseRef}>test useRef</button>
    </div>
  )
}

export default UseRefTest