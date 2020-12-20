import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Tamplate } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import './App.css';

import Routes from './routes';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Tamplate>
        <Header />
        <Routes />
        <Footer />
      </Tamplate>
    </BrowserRouter>
  );
}

const mapStateProps = (state) => {
  return {
    user:state.user
  }
}

const mapDispatchProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateProps, mapDispatchProps)(Page);