import Sidebar from "./Components/sidebar"
import Home from "./Components/home"

const App = () => {
  return (
    <div className='flex' >
      <Sidebar />
      <Home />
    </div>
  )
}

export default App