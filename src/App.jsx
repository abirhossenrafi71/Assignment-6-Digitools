import { useState, StrictMode, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'



const getNavData = async () => {
  const res = await fetch("/navbar.json");
  return res.json();
};
const navgationData = getNavData();
const getBannerdata = async () => {
  const res = await fetch("/banner.json");
  return res.json();
};
const bannerData = getBannerdata();

function App() {

  const [cartsData, setCartsData] = useState([]);


  return (
    <>
      <Suspense fallback={<h1>Hello</h1>}>
        <Navbar navgationData={navgationData} cartsData={cartsData}></Navbar>
      </Suspense>
      <Banner bannerData={bannerData}></Banner>

    </>
  )
}

export default App
