import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useHttp,  { ServerResponse, RequestObject} from '../hooks/useHttp';

const WaypointSearch: React.FC = () => {
  const [ident, setIdent] = useState('');
  const [wtype, setWtype] = useState('');
  const [searchResults, setSearchResults] = useState<ServerResponse['data']>([]);
  const { sendRequest } = useHttp();
  const navigate = useNavigate();


  const handleSearch = () => {
    const requestBody: { ident?: string | null; wtype?: string | null } = {};
  
    if (ident.trim() !== '') {
      requestBody.ident = ident.toLowerCase();
    } else {
      requestBody.ident = null;
    }
  
    if (wtype.trim() !== '') {
      requestBody.wtype = wtype.toLowerCase();
    } else {
      requestBody.wtype = null;
    }  
  
    const request: RequestObject = {
      url: '/waypoint/search',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    };
  
    sendRequest(
      request,
      (response: any) => {
        setSearchResults(response.data);
      },
      (error: string) => {
        console.error('Error fetching data:', error);
      }
    );
  };
  console.log('searchResults:', searchResults);

  const handleOpen = (id: number) => {
    navigate(`/waypoint/${id}`);
  };

  return (
    <div>
      <h2>Random Standup Waypoint Search</h2>
      <div>
        <label>Ident:</label>
        <input
          type="text"
          value={ident}
          onChange={(e) => setIdent(e.target.value)}
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          value={wtype}
          onChange={(e) => setWtype(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 ? (
      <div>
        <h3>Search Results:</h3>
        <table>
              <thead>
                <tr>
                  <th>Ident</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((waypoint: any) => (
                  <tr key={waypoint.id}>
                    <td>{waypoint.ident}</td>
                    <td>{waypoint.wtype}</td>
                    <td>
                      <button onClick={() => handleOpen(waypoint.id)}>Open</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
      </div>
      ) : (
        <p>No search results found.</p>)}
    </div>
  );
};

export default WaypointSearch;