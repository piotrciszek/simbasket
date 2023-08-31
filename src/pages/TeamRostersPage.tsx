import React from 'react';
import styles from './TeamRostersPage.module.css';
import he from 'he';

const TeamRostersPage: React.FC = () => {

  return (
    <div className={styles.iframeContainer}>
      <iframe title="index_htm" src="assets/rosters/index.htm"></iframe>
    </div>
  );
};


export default TeamRostersPage;