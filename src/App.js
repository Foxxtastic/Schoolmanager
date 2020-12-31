import './cssreset.css';
import './App.css';
import { Navbar } from './components/shared/Navbar';
import { Router } from 'react-router-dom';
import { history } from './components/history'
import { SchoolManagement } from './components/schoolmanagement/SchoolManagement';
import { Home } from './components/shared/Home';

const navbarItems = ["Home", "Schools"];

function App() {

  return (
    <>
      <Router history={history}>
        <Navbar
          items={navbarItems} links={["/", "/schools"]} />
        <Home />
        <SchoolManagement history={history} />
      </Router>
    </>
  );
}

export default App;
