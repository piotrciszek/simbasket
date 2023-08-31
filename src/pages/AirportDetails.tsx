import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp, { RequestObject } from '../hooks/useHttp';

const AirportDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [airportDetails, setAirportDetails] = useState<any>(null);
  const { sendRequest } = useHttp();

  useEffect(() => {
    const request: RequestObject = {
      url: `/airport/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    sendRequest(
      request,
      (response: any) => {
        setAirportDetails(response.data);
      },
      (error: string) => {
        console.error('Error fetching data:', error);
      }
    );
  }, [id, sendRequest]);

  return (
    <div>
      {airportDetails ? (
        <div>
          <h2>Airport Details</h2>
          <p>ICAO: {airportDetails.icao}</p>
          <p>Name: {airportDetails.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AirportDetails;
