import './App.css';
import { Routes, Route } from "react-router-dom";

import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;