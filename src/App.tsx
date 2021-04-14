import { useState } from "react"

const Counter = ({count} : {count : number}) => (
  <h1>
    Salto: {count}
  </h1>
)

const Counter2 = ({count} : {count : number}) => (
  <h1>
    La cuenta actual es: {count}
  </h1>
)

const App = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(1)

  const add = () => setCount(count + count2)
  const substract = () => setCount(count - count2)

  const addSalto = () => setCount2(count2 + 1)
  const subSalto = () => setCount2(count2 - 1)

  return (
    <main className="App">
      <h1 className="title">Contador con salto</h1>
      <div className="counter">
        <section>
          <Counter count={count2}/>
          <div className="buttons">
            <button onClick={addSalto}>Aumentar</button>
            <button onClick={subSalto}>Disminuir</button>
            <button onClick={() => setCount2(1)}>Reset</button>
          </div>
        </section>
        <section>
          <Counter2 count={count}/>
          <div className="buttons">
            <button onClick={add}>Aumentar</button>
            <button onClick={substract}>Disminuir</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
