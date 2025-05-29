import AboutUs from './pages/AboutUs'
import Nav from './pages/Nav'
import "./style/main.scss"

const App = () => {
  return (
    <div className='content-container'>
      <Nav />
      <AboutUs />
    </div>
  )
}

export default App