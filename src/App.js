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
import { StudentRequestManagement } from './components/administrator/StudentRequestManagement';
import appFeatures from './appFeatures';
import { SchooolStaffManagement } from './components/schoolstaffmanagement/SchoolStaffManagement';

const menuItems = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Register',
    link: '/register',
    isVisible: user => user === null
  },
  {
    text: 'Login',
    link: '/login',
    isVisible: user => user === null
  },
  {
    text: 'Admin',
    forUsersWith: [
      appFeatures.SchoolManagement,
      appFeatures.UserManagement,
      appFeatures.MajorManagement,
      appFeatures.TeacherManagement,
      appFeatures.StudentManagement,
      appFeatures.StudentRequestAssessment
    ],
    subItems: [
      {
        text: 'Schools',
        link: '/schools',
        forUsersWith: [appFeatures.SchoolManagement]
      },
      {
        text: 'Users',
        link: '/users',
        forUsersWith: [appFeatures.UserManagement]
      },
      {
        text: 'Majors',
        link: '/majors',
        forUsersWith: [appFeatures.MajorManagement]
      },
      {
        text: 'Teachers',
        link: '/teachers',
        forUsersWith: [appFeatures.TeacherManagement]
      },
      {
        text: 'Students',
        link: '/students',
        forUsersWith: [appFeatures.StudentManagement]
      },
      {
        text: 'Requests',
        link: '/requests',
        forUsersWith: [appFeatures.StudentRequestAssessment]
      },
      {
        text: 'Staff',
        link: '/staff',
        forUsersWith: [appFeatures.SchoolDashboard]
      }
    ]
  },
  {
    text: 'Student',
    forUsersWith: [appFeatures.StudentDashboard],
    subItems: [
      {
        text: 'Apply',
        link: '/apply',
        forUsersWith: [appFeatures.ApplyToSchools]
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
          <StudentRequestManagement />
          <SchooolStaffManagement schoolId={user.features[0].parameters && user.features[0].parameters.schoolId} />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
