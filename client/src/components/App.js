import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'assets/css/App.css';
import 'assets/css/General.css';
import 'assets/css/Users.css';
import { ContentBody, NavBar, NavSection, NavLink } from 'Layout';
import { Home, NotFound } from 'Pages';
import { LoginModal } from 'Sections';

import { UserAuthSubscriber } from 'services';

class App extends Component {
  state = { 
    showAuthModal: false
  }

  componentDidMount() { }


  render() {
    const { showAuthModal } = this.state;
    return (
      <UserAuthSubscriber>
        { auth => (
          <div className="App">
            <ContentBody>
              <NavBar>
                <NavSection align="left">
                  <NavLink Url="/" PageName="Jullian Anthony Sy-Lucero (JSyLucero)"/>
                </NavSection>
              </NavBar>
              
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound} />
              </Switch>
              <LoginModal auth={auth} show={showAuthModal}/>
            </ContentBody>
          </div>
        )}
      </UserAuthSubscriber>
    );
  }
}

export default App;