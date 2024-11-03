import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;