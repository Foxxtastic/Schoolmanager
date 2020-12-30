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
      isLoading: false,
    }
    this.getData = this.getData.bind(this);
  }

  setSchools(schools) {
    this.setState({ schools });
  }


  setIsLoading(isLoading) {
    this.setState({ isLoading });
  }

  getData() {
    this.setIsLoading(true);
    return fetch('/api/school')
      .then(res => res.json())
      .then(list => {
        this.setIsLoading(false);
        this.setSchools(list);
      });
  }

  componentDidMount() {
    this.getData();
  }

  handleSchoolCreate = (newItem) => {
    this.setIsLoading(true);
    fetch('/api/school', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(() => this.getData())
      .then(() => history.push("/schools"))
      .then(() => this.setIsLoading(false));
  }

  handleSchoolUpdate = (idToUpdate, school) => {
    this.setIsLoading(true);

    return fetch(`/api/school/${idToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(school)
    })
      .then(res => res.json())
      .then(() => this.setIsLoading(false));
  }

  handleSchoolDelete = (idToDelete) => {
    this.setIsLoading(true);

    fetch(`/api/school/${idToDelete}`, {
      method: 'DELETE'
    })
      .then(() => this.getData())
      .then(() => this.setIsLoading(false));
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
                    items={this.state.schools}
                    isLoading={this.state.isLoading}
                    linkToCreate="/schools/create"
                    afterUpdate={this.getData}
                    onDelete={this.handleSchoolDelete}
                    onUpdate={this.handleSchoolUpdate}
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
