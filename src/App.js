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
      schools: undefined
    }
  }

  setSchools(items) {
    this.setState({
      schools: items
    });
  }

  componentDidMount() {
    console.log('getting data...');
    fetch('/api/school')
      .then(res => res.json())
      .then(list => {
        console.log('schools: ', list);
        this.setSchools(list);
        console.log(this.state.schools)
      });
  }

  render() {

    return (
      <>
        <BrowserRouter>
          <Navbar
            items={navbarItems} link={["/", "/api/school"]} />
          <Switch>
            <Route path="/" exact>
              <div> hello </div>
            </Route>
            <Route path="/api/school" exact>
              < MainHeader text="Schools" />
              <div className="main-content bg-lgray">
                {(this.state.schools !== undefined) &&
                  < SchoolData data={this.state.schools} />}
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
