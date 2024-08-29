import React from 'react';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const DarkModeIcon : React.FC = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      style={{ margin: '0' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
      moonColor='darkgray'
      sunColor='orange'
    />
  );
};