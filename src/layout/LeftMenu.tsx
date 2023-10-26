import React from 'react';
import styles from './LeftMenu.module.css';

interface LeftMenuProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ selectedTab, onTabChange }) => {
  const tabs = ['inq', 'mx', 'vx'];

  return (
    <div className={styles['menu-top']}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          style={{ backgroundColor: tab === selectedTab ? 'lightgray' : 'white' }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default LeftMenu;