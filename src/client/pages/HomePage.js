import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { fetchMissions } from "../actions";
import Sidebar from "../components/Sidebar";
import MissionList from "../components/MissionList";
import { useLocation, useHistory } from "react-router-dom";


const HomePage = (props) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchFilteredMissions = async () => {
      await props.fetchMissions(location.search);
    };
    fetchFilteredMissions();
  }, [location.search]);

  const handleSearchFilterParam = async (filterParam) => {
    filterParam === '?' ? history.push(location.search) : history.push(filterParam);
  };

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>SpaceX Launch Programs</title>
        <meta property="og:title" content="SpaceX XT App" />
        <meta name="description" content="SpaceX programs application to show launch details" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://demovishal.herokuapp.com/" />
      </Helmet>
    );
  };

  return (
    <div>
      {head()}
      <div className="mx-2">
        <div className="myrow">
          <div className="mycol mycol-12 mycol-md-3 mycol-lg-2">
            <Sidebar searchFilterParam={handleSearchFilterParam} />
          </div>
          <div className="mycol mycol-12 mycol-md-9 mycol-lg-10">
            <div className="myrow ">
              <MissionList missions={props.missionsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    missionsData: state.missionsData,
  };
};

const loadData = (store) => {
  return store.dispatch(fetchMissions());
};

HomePage.propTypes = {
  missionsData: PropTypes.arrayOf(PropTypes.any),
  fetchMissions: PropTypes.func,
};

HomePage.defaultProps = {
  missionsData: [],
  fetchMissions: null,
};

export default {
  component: connect(mapStateToProps, { fetchMissions })(HomePage),
  loadData,
};

