import React, { Component } from 'react';
import { connect } from "react-redux";
import Notifications from 'react-notification-system-redux';
import {withRouter} from 'react-router-dom';
import './icons';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    const {notifications} = this.props;
    return (
      <div>
        <Notifications notifications={notifications} />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}
export default withRouter(connect(mapStateToProps)(App));
