
// import Home from "./Routes/Home"
import Popular from "./Routes/Popular"

import { Routes,Route } from 'react-router-dom'
import TopRated from "./Routes/TopRated"
import UpComing from "./Routes/UpComing"
import Home from "./Routes/Home"


function App() {


  return (
    <>
<Routes>

<Route path="/" element={<Popular/>}/>
<Route path="/Top_rated" element={<TopRated/>}/>
<Route path="/Up_coming" element={<UpComing/>}/>
<Route path="/home" element={<Home/>}/>

  </Routes>      



    </>
  )
}

export default App
