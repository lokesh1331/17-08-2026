import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="hello"> 
        <h1>Hello World</h1>
      {/* </div> */}

      {/* <div className="hello"> 
        <h1 style={{ color: 'green', fontSize: '2rem', fontWeight: 'bold' }}>Hello World</h1>
      {/* </div> */}
       <div className="container">
        <h1 className="title">3D Image Gallery</h1>
        <div className="image-grid">
          <div className="card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/070/036/701/small/majestic-lion-in-a-grassy-plain-under-cloudy-sky-photo.jpg" alt="Lion" />
            <div className="layer">Lion</div>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
