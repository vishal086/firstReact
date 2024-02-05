import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
      <Route path="/about" element={<About/>}>

      </Route>
      <Route path="/contact" element={<Contact/>}>

      </Route>
      <Route path="/login" element={<User/>}>

      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
}

export default App;
