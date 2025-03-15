// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './pages/Header'; // New Header component

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <Header /> 
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
