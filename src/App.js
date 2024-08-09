import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

// App / Root component - The parent component of everything.
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
