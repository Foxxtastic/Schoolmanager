import './cssreset.css';
import './App.css';
import { Navbar } from './components/shared/Navbar';
import { Router } from 'react-router-dom';
import { history } from './history'
import { Home } from './components/shared/Home';
import { SchoolManagement } from './components/schoolmanagement/SchoolManagement';
import { PersonManagement } from './components/personmanagement/PersonManagement';
import { UserManagement } from './components/usermanagement/UserManagement';

function App() {

  return (
    <>
      <Router history={history}>
        <Navbar
          items={["Home", "Schools", "Persons", "Users"]}
          links={["/", "/schools", "/persons", "/users"]}
        />
        <Home />
        <SchoolManagement />
        <PersonManagement />
        <UserManagement />
      </Router>
    </>
  );
}

export default App;
