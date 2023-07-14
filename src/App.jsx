import { BrowserRouter, Route, Routes } from "react-router-dom"
import Aksiya from "./components/Aksiya"
import Combo from "./components/Combo"
import Deserti from "./components/Deserti"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Napitki from "./components/Napitki"
import Pitsa from "./components/Pitsa"
import Sousi from "./components/Sousi"
import Sushi from "./components/Sushi"
import Zakuski from "./components/Zakuski"

// import HomeP from "./pages/HomeP"


function App() {
 

  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path="hero" element={<Hero/>}/>
<Route path="aksiya" element={<Aksiya/>}/>
<Route path="pitsa" element={<Pitsa/>}/>
<Route path="sushi" element={<Sushi/>}/>
<Route path="napitki" element={<Napitki/>}/>
<Route path="kombo" element={<Combo/>}/>
<Route path="zakuski" element={<Zakuski/>}/>
<Route path="deserti" element={<Deserti/>}/>
<Route path="sousi" element={<Sousi/>}/>
    </Route>
   </Routes>
    </BrowserRouter>

  )
}

export default App
