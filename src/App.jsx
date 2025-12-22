import { BrowserRouter, Route} from 'react-router-dom';
import { Home } from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Your routes and components go here */}
          <Routes>
            <Route index element={<Home />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
