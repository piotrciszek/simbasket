import { useState } from 'react';
import LeftMenu from '../layout/LeftMenu';
import NarrowMenu from '../layout/NarrowMenu';
import AirportSearch from '../components/AirportSearch';
import { Routes, Route } from 'react-router-dom';
import AirportDetails from '../pages/AirportDetails';
import RandomPickerPage from '../pages/RandomPickerPage';
import TeamRostersPage from '../pages/TeamRostersPage';
import WaypointSearchPage from '../pages/WaypointSearchPage';
import DhondtPage from '../pages/DhondtPage';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState<string>('inq');
  const [lastOpenedPage, setLastOpenedPage] = useState<string | null>(null);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (tab !== 'inq') {
      setLastOpenedPage(null);
    }
  };

  return (
    <div className='main-container'>
      <LeftMenu selectedTab={selectedTab} onTabChange={handleTabChange} />
      <NarrowMenu selectedTab={selectedTab} />
      <Routes>
        <Route path='/simbasket/teamRosters' element={<TeamRostersPage />} />
        <Route path='/randomstandup' element={<RandomPickerPage />} />
        <Route path='/dHondt' element={<DhondtPage />} />
        <Route path='/airportSearch' element={<AirportSearch />} />
        <Route path='/airport/:id' element={<AirportDetails />} />
        <Route path='/waypointSearch' element={<WaypointSearchPage />} />
      </Routes>
      {selectedTab === 'inq' && lastOpenedPage && <Route path={lastOpenedPage} />}
    </div>
  );
};

export default Main;