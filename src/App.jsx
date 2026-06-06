import { useState, StrictMode, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar/Navbar'



const getNavData = async () => {
  const res = await fetch("/navbar.json");
  return res.json();
};
const navgationData = getNavData();

function App() {

  const [cartsData, setCartsData] = useState([]);


  return (
    <>
      <Suspense fallback={<h1>Hello</h1>}>
        <Navbar navgationData={navgationData} cartsData={cartsData}></Navbar>
      </Suspense>
    </>
  )
}

export default App
