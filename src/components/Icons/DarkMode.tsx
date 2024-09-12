import React from 'react';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../../context/ThemeContext';

export const DarkModeIcon : React.FC = () => {
  
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    toggleTheme();
  }

  return (
    <DarkModeSwitch
      style={{ margin: '0' }}
      checked={isDarkMode}
      onChange={handleToggle}
      size={20}
      moonColor='darkgray'
      sunColor='orange'
    />
  );
};