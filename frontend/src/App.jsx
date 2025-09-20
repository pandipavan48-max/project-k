import NavBar from "./NavBar"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import HomePage from "./HomePage"
import {Routes,Route} from "react-router-dom"

function App() {
  

  return (
      <Routes >
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
  )
}

export default App
