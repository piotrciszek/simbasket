import React, { useState } from 'react';

const Dhondt: React.FC = () => {
  const [numParties, setNumParties] = useState<number>(4);
  const [threshold, setThreshold] = useState<number>(0);
  const [numMandates, setNumMandates] = useState<number>(0);
  const [partyResults, setPartyResults] = useState<number[]>([]);
  const [partyNames, setPartyNames] = useState<string[]>([]);
  const [mandates, setMandates] = useState<number[]>([]);

  const handleNumPartiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    setNumParties(num);

    setPartyResults(new Array(num).fill(0));
    setPartyNames(new Array(num).fill(''));
  };

  const handleThresholdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThreshold(parseFloat(e.target.value));
  };

  const handleNumMandatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumMandates(parseInt(e.target.value));
  };

  const handlePartyResultChange = (index: number, value: number) => {
    const newPartyResults = [...partyResults];
    newPartyResults[index] = value;
    setPartyResults(newPartyResults);
  };

  const handlePartyNameChange = (index: number, name: string) => {
    const newPartyNames = [...partyNames];
    newPartyNames[index] = name;
    setPartyNames(newPartyNames);
  };

  const calculateMandates = () => {
    if (partyNames.some((name) => name.trim() === '')) {
      alert('Please provide a name for all parties.');
      return;
    }

    const resultsWithIndexes = partyResults.map((result, index) => ({ result, index }));
    const mandatesCount = Array(numParties).fill(0);
    let remainingMandates = numMandates;
    
    const totalVotes = resultsWithIndexes.reduce((total, party) => total + party.result, 0);
    const thresholdVotes = (threshold / 100) * totalVotes;

    while (remainingMandates > 0) {
      let nextParty = -1;
      let maxQuotient = 0;

      for (let i = 0; i < numParties; i++) {
        const party = resultsWithIndexes[i];
        const votesThresholdMet = party.result >= thresholdVotes;
        const quotient = party.result / (mandatesCount[party.index] + 1);

        if (votesThresholdMet && quotient > maxQuotient) {
          maxQuotient = quotient;
          nextParty = party.index;
        }
      }

      if (nextParty === -1) {
        // No party qualifies for the remaining mandates.
        break;
      }

      mandatesCount[nextParty]++;
      remainingMandates--;
    }

    setMandates([...mandatesCount]);
  };

  return (
    <div>
      <div>
        <label>Number of Parties: </label>
        <input type="number" value={numParties} onChange={handleNumPartiesChange} />
      </div>
      <div>
        <label>Threshold (%): </label>
        <input type="number" value={threshold} onChange={handleThresholdChange} />
      </div>
      <div>
        <label>Number of Mandates: </label>
        <input type="number" value={numMandates} onChange={handleNumMandatesChange} />
      </div>
      {Array.from({ length: numParties }, (_, index) => (
        <div key={index}>
          <label>Party {index + 1} Name: </label>
          <input
            type="text"
            value={partyNames[index]}
            onChange={(e) => handlePartyNameChange(index, e.target.value)}
          />
          <label>Party {index + 1} Result: </label>
          <input type="number" value={partyResults[index]} onChange={(e) => handlePartyResultChange(index, parseInt(e.target.value))} />
        </div>
      ))}
      <button onClick={calculateMandates}>Calculate</button>
      <div>
        <h3>Calculated Mandates:</h3>
        {Array.from({ length: numParties }, (_, index) => (
          <p key={index}>
            {partyNames[index] || `Party ${index + 1}`} - {mandates[index]} mandates
          </p>
        ))}
      </div>
    </div>
  );
};export default Dhondt;