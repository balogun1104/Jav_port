import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Home from '../src/component/home';
import About from '../src/component/about';
import Skills from '../src/component/skills';
import Services from './component/Services';
import Contact from '../src/component/contact';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/about" element={<About />}> </Route>
          <Route exact path="/skills" element={<Skills />}> </Route>
          <Route exact path="/services" element={<Services />}> </Route>
          <Route exact path="/contact" element={<Contact />}> </Route>
        </Routes>
    </Router>
  );
}

export default App;
