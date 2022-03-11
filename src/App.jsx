import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// const ShowInfo = (props) => {
//   return <div> ShowInfo {props.name}</div>
// }

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  const [myStatus, setMyStatus] = useState(false);
  const [products, setProducts] = useState([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D' }]);
  const changeCount = () => {
    setCount(1);
  }
  const changeStatus = () => {
    setMyStatus(!myStatus);
  }
  const changeColor = () => {
    setColor("green");
  }
  const removeItem = (id) => {
    const newProduct = products.filter(item => item.id !== id);
    setProducts(newProduct);
  }
  return (
    <div className="App">
      Count: {count} <br />
      <button onClick={changeCount}>ChangeCount</button>
      Colors: <div style={{ background: color, width: 100, height: 100 }}>Color</div> <br />
      <button onClick={changeColor}>Change Color</button>
      Status : {myStatus ? "True" : "False"} <br />
      <button onClick={changeStatus}>Change Status</button>
      {myStatus && <div>
        Products: {products.map(item =>
          <div>{item.name} - 
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </div>)}
      </div>}
    </div>
  )
}

export default App
