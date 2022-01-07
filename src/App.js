import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Pasteles from './pasteles';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Pasteles/>
    </div>
  );
}

export default App;
