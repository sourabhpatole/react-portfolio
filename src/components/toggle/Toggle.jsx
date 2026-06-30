import React, { useContext } from 'react';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import './toggle.css';
import { ThemeContext } from '../../context/context';

const Toggle = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const handleClick = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className="toggle">
      <img src={Sun} alt="Light Mode" className="t-icon" />

      <img src={Moon} alt="Dark Mode" className="t-icon" />

      <div
        className="t-button"
        role="button"
        tabIndex={0}
        aria-label="Toggle theme"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
        style={{ right: state.darkMode ? 32 : 0 }}
      />
    </div>
  );
};

export default React.memo(Toggle);
