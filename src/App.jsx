import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increse, decrease, reset, setStep } from './store/counterSlice';
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
  const dispatch = useDispatch();

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme])

  return (
    <>
      <h1>Vite + React | Counter App</h1>

      <button type="button"
      className='theme-btn'
      onClick={()=>  dispatch(toggleTheme())}
      >{theme}</button>

      <h2>Counter: {count}</h2>

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
        Made with 🧡
      </p>
    </>
  )
}

export default App
