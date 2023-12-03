import { useContext, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import varcontext from './Filecontext'

function App() {
  const [val, setval] = useState('')

  return (
    <varcontext.Provider value={{ val, setval }}>
      <Component3 />
      <Component2 />
    </varcontext.Provider>
  )
}
function Component2() {
  const [data, setdata] = useState('')
  const [submit, setsubmit] = useState(false)
  const { setval } = useContext(varcontext)
  const varinput = useRef()
  const handlesubmit = (e) => {
    e.preventDefault()
    setval({ data })
    setsubmit(true)
    varinput.current.style.display = 'none'
  }
  return (
    <form onSubmit={handlesubmit}>
      <div>
        <input
          style={{ padding: "7px", backgroundColor: "lightblue", color: "black" }}
          ref={varinput}
          type='text'
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        <br />
        <br />
        <center><button style={{ padding: '6px', fontFamily: "fantasy", fontSize: "15px" }}>{(submit) ? 'submitted' : 'submit'}</button></center>
      </div>
    </form>

  )
}
function Component3() {
  const { val } = useContext(varcontext);

  return (
    <>
      <center>
        {(!val) && <h3>plz login</h3>}
        {(val) && <h3>welcome {val.data}</h3>}
      </center>
    </>
  )
}
export default App
