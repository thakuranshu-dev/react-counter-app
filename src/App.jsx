import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(() => 
   localStorage.getItem("theme") || "dark"
  )
  const [counter, setCounter] = useState(1);

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme])

  return (
    <>
      <h1>Vite + React | Counter App</h1>

      <button type="button"
      className='theme-btn'
      onClick={()=>  setTheme((theme)=> theme === 'dark' ? 'light' : "dark")}
      >{theme}</button>

      <h2>Counter: {count}</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + counter)}>
          Increase
        </button>
        <button onClick={() => setCount((count) => count === 0 ? 0 : count - 1)}>
          Decrease
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <select value={counter}
        onChange={(e)=>setCounter(parseInt(e.target.value))}>
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
