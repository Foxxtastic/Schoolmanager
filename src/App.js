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
import { MajorManagement } from './components/majormanagement copy/MajorManagement';

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
      },
      {
        text: 'Majors',
        link: '/majors'
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
        <MajorManagement />
        <Login />
      </Router>
    </>
  );
}

export default App;
