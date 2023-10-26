import React, { useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import styles from './NarrowMenu.module.css';
import { useNavigate } from 'react-router-dom';

interface NarrowMenuProps {
  selectedTab: string;
}

const NarrowMenu: React.FC<NarrowMenuProps> = ({ selectedTab  }) => {
  const navigate = useNavigate();
  const icons = Array.from({ length: 10 }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faCoffee} className={styles.icon} onClick={() => handleIconClick(index)} />
  ));

  const handleIconClick = (index: number) => {
    switch (selectedTab) {
      case 'inq':
        if (index === 0) {
          navigate('/airportSearch');
        } 
        if (index === 1) {
          navigate('/waypointSearch');
        } else {
          console.log(`Clicked on icon ${index} in the INQ tab. Perform INQ action.`);
        }
        if (index === 2) {
          navigate('/dhondt');
        } else {
          console.log(`Clicked on icon ${index} in the INQ tab. Perform INQ action.`);
        }
          break;
      case 'mx':
        console.log(`Clicked on icon ${index} in the MX tab. Perform MX action.`);
        break;
      case 'vx':
        console.log(`Clicked on icon ${index} in the VX tab. Perform VX action.`);
        break;
      default:
        break;
    }
  };

  return <div className={styles.component}>{icons}</div>;
};

export default NarrowMenu;