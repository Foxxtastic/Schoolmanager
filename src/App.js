import './cssreset.css';
import './App.scss';
import { Navbar } from './components/shared/Navbar';
import { Router } from 'react-router-dom';
import { history } from './history';
import { Login } from './components/loginmanagement/Login';
import { Home } from './components/shared/Home';
import { SchoolManagement } from './components/schoolmanagement/SchoolManagement';
import { UserManagement } from './components/usermanagement/UserManagement';
import { MajorManagement } from './components/majormanagement/MajorManagement';
import { TeacherManagement } from './components/teachermanagement/TeacherManagement';
import { StudentManagement } from './components/studentmanagement/StudentManagement';

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
  }
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
        <UserManagement />
        <MajorManagement />
        <TeacherManagement />
        <StudentManagement />
        <Login />
      </Router>
    </>
  );
}

export default App;
