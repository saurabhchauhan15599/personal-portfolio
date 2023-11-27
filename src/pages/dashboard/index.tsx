import React from 'react';
import AboutMe from '../../components/common/about-me';
import Description from '../../components/common/description';
import AddProjects from '../../components/common/projects';
import Skills from '../../components/common/skills-section';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <AboutMe />
      <Description />
      <Skills />
      <AddProjects />
    </React.Fragment>
  );
};

export default Dashboard;
