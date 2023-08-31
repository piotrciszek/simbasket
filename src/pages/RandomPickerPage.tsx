import React, { useState } from 'react';
import NameInput from '../components/NameInput';
import RandomNameDisplay from '../components/RandomNameDisplay';
import predefinedNames from '../data/predefinedNames';

const RandomPickerPage: React.FC = () => {
  const [names, setNames] = useState<string[]>(predefinedNames);
  const [randomName, setRandomName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddName = (newName: string) => {
    setNames(prevNames => [...prevNames, newName]);
  };

  const handleRemoveName = (index: number) => {
    setNames(prevNames => prevNames.filter((_, i) => i !== index));
  };

  const handlePickRandomName = () => {
    if (names.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setRandomName(names[randomIndex]);
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <NameInput
        names={names}
        onAddName={handleAddName}
        onRemoveName={handleRemoveName}
      />
      <RandomNameDisplay
        randomName={randomName}
        onPickRandomName={handlePickRandomName}
        names={names}
        isLoading={isLoading}
      />
    </div>
  );
};

export default RandomPickerPage;
  