import {Route, Routes} from 'react-router-dom'
import { ProductPages } from './pages/ProductsPage'
import { AboutPage } from './pages/AboutPage'
import {Navigation} from './components/Navigation'

function App() {
  return(
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={ <ProductPages /> }/>
      <Route path='/about' element={ <AboutPage /> }/>
    </Routes>
    </>

  )
  }

export default App;
