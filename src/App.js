import './cssreset.css';
import './App.css';
import { Navbar } from './components/shared/Navbar';
import { Router } from 'react-router-dom';
import { history } from './history';
import { Login } from './components/loginmanagement/Login';
import { Home } from './components/shared/Home';
import { SchoolManagement } from './components/schoolmanagement/SchoolManagement';
import { PersonManagement } from './components/personmanagement/PersonManagement';
import { UserManagement } from './components/usermanagement/UserManagement';

const menuItems = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Login',
    link: '/login'
  },
  {
    text: 'Admin',
    subItems: [
      {
        text: 'Schools',
        link: '/schools'
      },
      {
        text: 'Persons',
        link: '/persons'
      },
      {
        text: 'Users',
        link: '/users'
      }
    ]
  },
];

function App() {

  return (
    <>
      <Router history={history}>
        <Navbar
          menuItems={menuItems}
        />
        <Home />
        <SchoolManagement />
        <PersonManagement />
        <UserManagement />
        <Login />
      </Router>
    </>
  );
}

export default App;
