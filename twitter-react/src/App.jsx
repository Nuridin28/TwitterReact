import './App.css'
import SideBar from './Components/SideBar/SideBar'
import Content from './Components/Main/Content'
import SearchSection from './Components/Search/SearchSection'

function App() {
  return (
      <div className='df'>
        <SideBar />
        <Content />
        <SearchSection />
      </div>
  )
}

export default App
