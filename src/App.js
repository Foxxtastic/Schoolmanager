import './cssreset.css';
import './App.css';
import { Navbar } from './components/shared/Navbar';
import { Router } from 'react-router-dom';
import { history } from './history'
import { SchoolManagement } from './components/schoolmanagement/SchoolManagement';
import { Home } from './components/shared/Home';

function App() {

  return (
    <>
      <Router history={history}>
        <Navbar
          items={["Home", "Schools"]}
          links={["/", "/schools"]}
        />
        <Home />
        <SchoolManagement />
      </Router>
    </>
  );
}

export default App;
