import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from "react-icons/lu";
import HERO_IMG from "../assets/hero-img.png";
import mainImg from "../assets/img_main.png";
import { APP_FEATURES } from "../utils/data";
import Modal from '../components/Modal';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { UserContext } from '../context/userContext';

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-[80vh] relative overflow-hidden flex items-center"
        style={{ background: 'var(--gradient-bg)' }}
      >
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)] blur-[300px] opacity-20 z-0" />
        <div className="container mx-auto px-6 md:px-12 py-10 relative z-10">
          <header className="flex justify-between items-center mb-12">
            <div className="text-2xl font-bold text-[var(--color-text-main)]">
              Interview PrepMateAI
            </div>
            {!user && (
              <button className="btn-primary" onClick={() => setOpenAuthModal(true)}>
                Login / Sign Up
              </button>
            )}
          </header>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-3">
                <div
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border"
                  style={{
                    color: 'var(--color-accent-dark)',
                    backgroundColor: 'var(--color-bg-main)',
                    borderColor: 'var(--color-accent)',
                  }}
                >
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-snug text-[var(--color-text-main)]">
                Ace Interviews with <br />
                <span
                  className="text-transparent bg-clip-text font-bold animate-text-shine"
                  style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-accent), var(--color-accent-dark))',
                  }}
                >
                  AI-Powered
                </span>{" "}
                Learning
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-text-muted)] mb-6">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary" onClick={handleCTA}>
                  Get Started
                </button>
                {!user && (
                  <button
                    className="btn-primary"
                    onClick={() => setOpenAuthModal(true)}
                    style={{
                      backgroundImage: 'linear-gradient(to right, #00bcd4, #0097a7)',
                    }}
                  >
                    Login / Sign Up
                  </button>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src={HERO_IMG}
                alt="Hero"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="w-full py-12 md:py-16" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-header text-[var(--color-footer-text)] text-center mb-10">
            Explore How It Looks
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border"
                style={{ borderColor: 'var(--color-card-border)' }}
              >
                <img
                  src={mainImg}
                  className="w-full h-60 object-cover"
                  alt={`Page ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-16" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="section-header text-center text-[var(--color-text-main)] mb-10">
            Features That Make You Shine
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {APP_FEATURES.map((feature) => (
              <div key={feature.id} className="card">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-sm text-center py-5"
        style={{
          backgroundColor: 'var(--color-footer-bg)',
          color: 'var(--color-footer-text)',
        }}
      >
        Made by @palak.
      </footer>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
