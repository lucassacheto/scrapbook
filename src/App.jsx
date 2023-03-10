import Login from './components/Login'
import Scrapbook from './components/Scrapbook'
import { useSelector } from 'react-redux'
import {fetchData} from './redux/loginSlice'

function App() {
  
  const userLocalStorage = fetchData("userName")
  const login = useSelector((state) => state.login.value)
  

  return (
    <div className="App">
      
      <div className="container">
        <h1>Orkut Profile</h1>
        {login && <p>Welcome, {userLocalStorage}</p>}
      {
        !login  ?
        <Login />
        :
         <Scrapbook />
      }
      </div>

      <footer>Developed by: Lucas Sacheto</footer>
    </div>
  )
}

export default App
