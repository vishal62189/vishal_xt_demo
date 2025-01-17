import React from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import ErrorBoundary from "./components/ErrorBoundry";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
const App = ({ route }) => {
  return (
    <div className="grey lighten-3">
      <Header />
      <div className="mx-2">
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};



App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default {
  component: App,
};