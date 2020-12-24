import './cssreset.css';
import './App.css';
import { SchoolData } from './components/SchoolData';
import { Navbar } from './components/Navbar';
import { MainHeader } from './components/MainHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import { CreateItem } from './components/CreateItem';

const navbarItems = ["Home", "Schools"];

const createSchoolLabels = ["Id", "Name", "Country", "City", "Address"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: undefined,
      loaded: false
    }
  }

  setSchools(items) {
    this.setState({
      schools: items
    });
  }

  setLoaded(statement) {
    this.setState({
      loaded: statement
    });
  }

  setNewSchool(item) {
    this.setState({
      newschool: item
    });
  }

  getData() {
    console.log('getting data...');
    fetch('/api/school')
      .then(res => res.json())
      .then(list => {
        console.log("loading:");
        this.setLoaded(true);
        console.log('schools: ', list);
        this.setSchools(list);
      });
  }

  componentDidMount() {
    this.getData();
  }

  handleSchoolCreate = (newItem) => {
    fetch('/api/school', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(newSchool => {
        console.log('newSchool: ', newSchool);
        this.getData();
      });
  }

  handleSchoolDelete = (idxtoDelete) => {
    fetch(`/api/school/${idxtoDelete}`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log('delete status code: ', res.status, res.statusText);
        this.getData();
      });
  }

  render() {

    return (
      <>
        <BrowserRouter>
          <Navbar
            items={navbarItems} links={["/", "/schools"]} />
          <Switch>
            <Route path="/" exact>
              <div> hello </div>
            </Route>
            <Route path="/schools" exact>
              <MainHeader text="Schools" />
              <div className="main-content bg-mgray">
                {(this.state.schools !== undefined) &&
                  <SchoolData items={this.state.schools} linkToCreate="/schools/create" handleSchoolDelete={this.handleSchoolDelete} />}
              </div>
            </Route>
            <Route path="/schools/create">
              <MainHeader text="Create new School" />
              <div className="main-content bg-mgray">
                <CreateItem labels={createSchoolLabels} handleSchoolCreate={this.handleSchoolCreate} />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
