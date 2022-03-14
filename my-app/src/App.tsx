import { useState } from 'react';
import './App.css';
import ShowInfo from './components/ShowInfo';
import { Product } from './types/product';

function App() {
  const [count,setCount] = useState<number>(0)
  const [info,setInfo] = useState<Product>({
    age: 19,
    name: "Binh"
  })

  return (
    <div className="App">
      {count} <button onClick={() => setCount(count +1)}>setCount</button><br/>
      <ShowInfo person={info} />
      <h3>{info.name} </h3>
      <h4>{info.age}</h4>
    </div>
  )
}

export default App
