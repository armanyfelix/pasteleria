import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cakes from './screens/cakesScreen';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div className='text-center font-mono text-2xl mt-32 text-[#caa59d] animate-pulse'>Loading... </div>}>
            <Cakes />
          </Suspense >
        } />
      </Routes>
    </Router>
  );
}

export default App;
