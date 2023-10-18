import { useState, lazy } from "react"
import './App.css'

 
const Header = lazy(()=>import("./Header")) 
const Sidebar = lazy(()=>import("./Sidebar")) 
const Home = lazy(()=>import("./Home")) 


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App