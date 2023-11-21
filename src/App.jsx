import Login from './components/Login'
import Scrapbook from './components/Scrapbook'
import { useSelector, useDispatch } from 'react-redux'
import {fetchData, logout} from './redux/loginSlice'

function App() {
  
  const userLocalStorage = fetchData("userName")
  const login = useSelector((state) => state.login.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      
      <div className="container">
        <h1>Scrapbook</h1>
        {
          login || userLocalStorage ? 
          <>
            <p>Welcome, {userLocalStorage}</p>
            <a href="#" 
              onClick={() => { 
                dispatch(logout());
              }}
            >logout</a>
          </> 
          : null
        }
        {
          
          !login  && !userLocalStorage ?
          <>
            <Login />
          </>
          :
          <Scrapbook />
        }
      </div>

      <footer>Developed by: Lucas Sacheto</footer>
    </div>
  )
}

export default App
