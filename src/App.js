import Splash from "./components/Splash/Splash";
import JoinPage from "./components/JoinPage/JoinPage";

import {HashRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />}/> 
        <Route path='/joinpage' element={<JoinPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
