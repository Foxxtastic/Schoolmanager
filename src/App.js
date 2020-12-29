import './cssreset.css';
import './App.css';
import { SchoolList } from './components/SchoolList';
import { Navbar } from './components/Navbar';
import { MainHeader } from './components/MainHeader';
import { Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import { GenericTextForm } from './components/GenericTextForm';
import { history } from './history'

const navbarItems = ["Home", "Schools"];

const createSchoolLabels = ["EduId", "Name", "Country", "City", "Address"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: undefined,
      loaded: false,
      isLoading: false,
    }
    this.getData = this.getData.bind(this);
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
    return fetch('/api/school')
      .then(res => res.json())
      .then(list => {
        console.log("loading:");
        this.setLoaded(true);
        console.log('schools: ', list);
        this.setSchools(list);
      });
  }

  setIsloading(isLoading) {
    this.setState({
      isLoading: isLoading
    })
  }

  componentDidMount() {
    this.getData();
  }

  handleSchoolCreate = (newItem) => {
    this.setIsloading(true);
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
        return this.getData();
      })
      .then(() => history.push("/schools"))
      .then(() => this.setIsloading(false));
  }

  handleSchoolUpdate = (idToUpdate, school) => {
    return fetch(`/api/school/${idToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(school)
    })
      .then(res => res.json())
      .then(updatedSchool => {
        console.log('updatedSchool: ', updatedSchool);
      });
  }

  handleSchoolDelete = (idToDelete) => {
    this.setIsloading(true);
    fetch(`/api/school/${idToDelete}`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log('delete status code: ', res.status, res.statusText);
        return this.getData()
          .then(() => this.setIsloading(false));
      })
  }

  render() {

    return (
      <>
        <Router history={history}>
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
                  <SchoolList
                    afterUpdate={this.getData}
                    items={this.state.schools}
                    linkToCreate="/schools/create"
                    onDelete={this.handleSchoolDelete}
                    onUpdate={this.handleSchoolUpdate}
                    isLoading={this.state.isLoading}
                  />}
              </div>
            </Route>
            <Route path="/schools/create">
              <MainHeader text="Create new School" />
              <div className="main-content bg-mgray">
                <GenericTextForm labels={createSchoolLabels} isLoading={this.state.isLoading} onSubmit={this.handleSchoolCreate} />
              </div>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
