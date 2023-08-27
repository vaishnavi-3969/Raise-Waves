import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-12 h-12 rounded-full flex justify-center items-center ${
      isActive === name ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-blue-300'
    } ${!disabled && 'cursor-pointer'}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt="fund_logo"
      className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}
    />
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gray-900 text-white py-8">
      <Link to="/" className="mb-8">
        <img src={logo} alt="logo" className="w-12 h-12" />
      </Link>

      <div className="flex flex-col justify-center items-center space-y-4">
        {navlinks.map((link) => (
          <Icon
            key={link.name}
            {...link}
            isActive={isActive}
            handleClick={() => {
              if (!link.disabled) {
                setIsActive(link.name);
                navigate(link.link);
              }
            }}
          />
        ))}
      </div>

      <div className="w-12 h-12 bg-gray-700 hover:bg-blue-400 transition-colors rounded-full flex justify-center items-center">
        <img src={sun} alt="sun_icon" className="w-1/2 h-1/2" />
      </div>
    </div>
  );
};

export default Sidebar;
