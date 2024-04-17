import { Outlet } from 'react-router-dom'
import './App.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

function App() {
  return (
    <div className='App'>
      <div className='App-content'>
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
