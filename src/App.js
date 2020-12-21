import './cssreset.css';
import './App.css';
import { SchoolData } from './components/SchoolData';
import { Navbar } from './components/Navbar';
import { MainHeader } from './components/MainHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

const navbarItems = ["Home", "Schools"]

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

  componentDidMount() {
    console.log('getting data...');
    fetch('/api/schools')
      .then(res => res.json())
      .then(list => {
        console.log("loading:");
        this.setLoaded(true);
        console.log('schools: ', list);
        this.setSchools(list);
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
              <div className="main-content bg-lgray">
                {(this.state.schools !== undefined) &&
                  <SchoolData items={this.state.schools} />}
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
