import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/');
  };

  return (
    <div className="h-14 bg-white border-b border-[var(--color-card-border)] backdrop-blur-[2px] px-4 md:px-0 sticky top-0 z-30 shadow-sm">
      <div className="w-9/10 container mx-auto flex items-center justify-between gap-5 h-full">
        <Link to="/dashboard">
          <h2 className="text-lg md:text-xl font-semibold text-[var(--color-accent-dark)] tracking-tight">
            PrepMate AI
          </h2>
        </Link>

        {user && (
        <button onClick={handleLogout} className="btn-primary px-5 py-2 text-sm">
           Logout
        </button>)}
      </div>
    </div>
  );
};

export default Navbar;
