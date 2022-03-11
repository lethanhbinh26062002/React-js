import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ShowAge } from './components'
// const person = {
//   name: "Binh",
//   age: 18,
//   status: false,
//   children: [
//     { id: 1, ten: "nguoi1" },
//     { id: 2, ten: "nguoi2" },
//   ]
// }
// const showAge = (age) => <p>Tuoi cua bn la: {age}</p>
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <div>
  //   <p>Ten: {person.name}</p>
  //   <p>Tuoi: {person.age}</p>
  //   <p>status: {person.status ? "ok" : "lỗi"}</p>
  //   <div>
  //     <ul>
  //       {person.children.map(people => <li>
  //         {people.ten}
  //       </li>)}
  //     </ul>
  //   </div>
  //   function: {showAge(person.age)}
  //   {/* components */}
  //   <div>
  //     Component: <ShowAge age={person.age} />
  //   </div>
  // </div>,

  document.getElementById('root')
)
