import './cssreset.css';
import './App.css';
import { Navbar } from './components/shared/Navbar';
import { Router } from 'react-router-dom';
import { history } from './history'
import { SchoolManagement } from './components/schoolmanagement/SchoolManagement';
import { Home } from './components/shared/Home';
import { PersonManagement } from './components/personmanagement/PersonManagement';

function App() {

  return (
    <>
      <Router history={history}>
        <Navbar
          items={["Home", "Schools", "Persons"]}
          links={["/", "/schools", "/persons"]}
        />
        <Home />
        <SchoolManagement />
        <PersonManagement />
      </Router>
    </>
  );
}

export default App;
