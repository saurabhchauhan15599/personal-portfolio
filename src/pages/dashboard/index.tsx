import React from 'react';
import AboutMe from '../../components/common/about-me';
import Description from '../../components/common/description';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <AboutMe />
      <Description />
    </React.Fragment>
  );
};

export default Dashboard;
