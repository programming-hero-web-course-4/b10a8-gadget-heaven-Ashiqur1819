import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';

const App = () => {
  return (
    <div className='font-sora'>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;