import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useHttp,  { ServerResponse, RequestObject} from '../hooks/useHttp';

const AirportSearch: React.FC = () => {
  const [icao, setIcao] = useState('');
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState<ServerResponse['data']>([]);
  const { sendRequest } = useHttp();
  const navigate = useNavigate();


  const handleSearch = () => {
    const requestBody: { icao?: string | null; name?: string | null } = {};
  
    if (icao.trim() !== '') {
      requestBody.icao = icao.toLowerCase();
    } else {
      requestBody.icao = null;
    }
  
    if (name.trim() !== '') {
      requestBody.name = name.toLowerCase();
    } else {
      requestBody.name = null;
    }  
  
    const request: RequestObject = {
      url: '/airport/search',
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
    navigate(`/airport/${id}`);
  };

  return (
    <div>
      <h2>Random Standup Airport Search</h2>
      <div>
        <label>ICAO:</label>
        <input
          type="text"
          value={icao}
          onChange={(e) => setIcao(e.target.value)}
        />
      </div>
      <div>
        <label>NAME:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 ? (
      <div>
        <h3>Search Results:</h3>
        <table>
              <thead>
                <tr>
                  <th>ICAO</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((airport: any) => (
                  <tr key={airport.id}>
                    <td>{airport.icao}</td>
                    <td>{airport.name}</td>
                    <td>
                      <button onClick={() => handleOpen(airport.id)}>Open</button>
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

export default AirportSearch;