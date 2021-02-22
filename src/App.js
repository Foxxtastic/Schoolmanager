import './cssreset.css';
import './App.scss';
import Navbar from './components/shared/Navbar';
import { Router } from 'react-router-dom';
import { history } from './history';
import { Login } from './components/accountmanagement/Login';
import { Register } from './components/accountmanagement/Register';
import { Home } from './components/shared/Home';
import { SchoolManagement } from './components/schoolmanagement/SchoolManagement';
import { UserManagement } from './components/usermanagement/UserManagement';
import { MajorManagement } from './components/majormanagement/MajorManagement';
import { TeacherManagement } from './components/teachermanagement/TeacherManagement';
import { StudentManagement } from './components/studentmanagement/StudentManagement';
import { UserContext } from './contexts/UserContext';
import { getStorageItem } from './helpers/storageHelpers';
import { useState } from 'react';
import { RequestManagement } from './components/requestmanagement/RequestManagement';

const menuItems = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Register',
    link: '/register'
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
        text: 'Users',
        link: '/users'
      },
      {
        text: 'Majors',
        link: '/majors'
      },
      {
        text: 'Teachers',
        link: '/teachers'
      },
      {
        text: 'Students',
        link: '/students'
      }
    ]
  },
  {
    text: 'Student',
    subItems: [
      {
        text: 'Apply',
        link: '/apply'
      }
    ]
  }
];

function App() {

  const [user, setUser] = useState(getStorageItem('user'));

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router history={history}>
          <Navbar
            menuItems={menuItems}
          />
          <Home />
          <SchoolManagement />
          <UserManagement />
          <MajorManagement />
          <TeacherManagement />
          <StudentManagement />
          <Login />
          <Register />
          <RequestManagement />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
