import React from 'react';

import Layout from './Layout';
import PRList from './PRList';
import '../styles/home.scss';

const Home = () => {

  return (
    <Layout>
      <h1 className="welcome-text">
        These are the PR's that are marked with "review plz"
      </h1>
      <PRList />
    </Layout>
  )
}

export default Home;