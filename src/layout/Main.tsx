import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AirportSearchPage from '../pages/AirportSearchPage';
import RandomPickerPage from '../pages/RandomPickerPage';
import AirportDetails from '../pages/AirportDetails';
import TeamRostersPage from '../pages/TeamRostersPage';

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/simbasket/teamRosters' element={<TeamRostersPage />}></Route>
          <Route path='/randomstandup' element={<RandomPickerPage />}></Route>
          <Route path='/randomstandup/airportSearch' element={<AirportSearchPage />} />
          <Route path='/randomstandup/airport/:id' element={<AirportDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;