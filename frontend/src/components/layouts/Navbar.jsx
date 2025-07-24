import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { LuPlus } from 'react-icons/lu';

const Navbar = ({ onAddSession }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/');
  };

  return (
    <div className="h-14 bg-white border-b border-[var(--color-card-border)] backdrop-blur-[2px] px-4 md:px-0 sticky top-0 z-30 shadow-sm">
      <div className="w-9/10 container mx-auto flex items-center justify-between gap-4 h-full">
        <Link to="/dashboard">
          <h2 className="text-lg md:text-xl font-semibold text-[var(--color-accent-dark)] tracking-tight">
            PrepMate AI
          </h2>
        </Link>

        {user && (
          <div className="flex items-center gap-2">
            {/* Add New Button */}
            {onAddSession && (
              <button
                onClick={onAddSession}
                className="hidden sm:flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-[var(--color-accent-dark)] hover:bg-[var(--color-accent)] rounded-full transition"
              >
                <LuPlus className="text-lg" />
                Add Session
              </button>
            )}
            {/* Mobile version (icon only) */}
            {onAddSession && (
              <button
                onClick={onAddSession}
                className="sm:hidden p-2 rounded-full bg-[var(--color-accent-dark)] text-white hover:bg-[var(--color-accent)]"
              >
                <LuPlus className="text-lg" />
              </button>
            )}
            <button onClick={handleLogout} className="btn-primary px-4 py-1.5 text-sm">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
