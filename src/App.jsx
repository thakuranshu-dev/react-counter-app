import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increse, decrease, reset, setStep, pickRecent, setRecent, deleteRecent } from './store/counterSlice';
import { toggleTheme } from './store/themeSlice';

function App() {
  /*const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(() => 
   localStorage.getItem("theme") || "dark"
  )
  const [counter, setCounter] = useState(1); */
  
  const count = useSelector((state)=> state.counter.value);
  const step = useSelector((state)=> state.counter.step);
  const theme = useSelector((state)=> state.theme.mode);
  const history = useSelector((state)=> state.counter.recent);
  const dispatch = useDispatch();

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme])
  useEffect(()=>{
    dispatch(setRecent(count))
  },[count])

  return (
    <>
      <h1>Vite + React | Counter App</h1>

      <button type="button"
      className='theme-btn'
      onClick={()=>  dispatch(toggleTheme())}
      >{theme}</button>

      <h2>Counter: {count}</h2>
      <select name="history" id="history"
      value={history[history.length-1]}
      onChange={(e)=>dispatch(pickRecent(parseInt(e.target.value)))}
      >
        {Array.isArray(history) && history.length > 0 ?
          history.map((recent, idx)=>(
            <option value={recent}>{recent}</option>
          )) :
          <option value="0">0</option> 
        }
      </select>

      <button type="button"
      onClick={()=>dispatch(deleteRecent())}
      className='clear-btn'
      >Clear</button>

      <div className="card">
        <button onClick={() => dispatch(increse())}>
          Increase
        </button>
        <button onClick={() => dispatch(decrease())}>
          Decrease
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
        <select value={step}
        onChange={(e)=>dispatch(setStep(parseInt(e.target.value)))}>
          <option value="1">+1</option>
          <option value="2">+2</option>
          <option value="5">+5</option>
          <option value="10">+10</option>
        </select>

        
      </div>
      <p className="read-the-docs">
        Made with 🧡 by Anshu Kumar Thakur
      </p>
    </>
  )
}

export default App
