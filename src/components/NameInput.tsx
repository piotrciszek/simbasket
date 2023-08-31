import React, { useState } from 'react';
import Button from '../ui/Button';
import styles from './NameInput.module.css'
import { NameInputProps } from '../types/types';


const NameInput: React.FC<NameInputProps> = ({ names, onAddName, onRemoveName }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddClick = () => {
    if (name.trim() !== '') {
      onAddName(name);
      setName('');
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAddClick();
  };

  const handleRemoveClick = (index: number) => {
    onRemoveName(index);
  };

  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, index: number) => {
    event.dataTransfer.setData('index', index.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const fromIndex = Number(event.dataTransfer.getData('index'));
    onRemoveName(fromIndex);
  };
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter a name"
          className={styles.input}
        />
        <Button onClick={handleAddClick} disabled={name.trim().length === 0}>
          Add Name
        </Button>
        <ul className={styles.nameList}>
          {names.map((nameItem, index) => (
            <li 
              key={index}
              className={styles.nameItem}
              draggable
              onDragStart={(event) => handleDragStart(event, index)}
              >
              {nameItem}
              <Button onClick={() => handleRemoveClick(index)} type="remove">
              </Button>
            </li>
          ))}
        </ul>
        {names.length > 0 && (
        <div
          className={styles.trash}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Drop here to remove
        </div>
        )}
      </form>
    </div>
  );
};

export default NameInput;
