import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/New Creature Evangelical Ministry Logo.png';
import { branches } from '../../data/locationsData';

const navLinks = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'events', label: 'Events', href: '/events' },
  { key: 'locations', label: 'Locations', href: '/locations' },
  { key: 'resources', label: 'Resources', href: '/resources' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

// Derive the active nav key from the current URL pathname
const useActiveKey = () => {
  const { pathname } = useLocation();
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/events')) return 'events';
  if (pathname.startsWith('/locations')) return 'locations';
  if (pathname.startsWith('/resources')) return 'resources';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/give') || pathname.startsWith('/givenow')) return 'home';
  return null;
};

// Derive the navbar variant from the current route
const useVariant = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  // /locations/:districtSlug/:branchSlug
  if (parts.length >= 3 && parts[0] === 'locations') return 'branch';
  // /locations/:districtSlug
  if (parts.length === 2 && parts[0] === 'locations') return 'district';
  return null;
};

const Navbar = () => {
  const active = useActiveKey();
  const variant = useVariant();
  const isLocations = active === 'locations';

  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const q = query.trim().toLowerCase();
  const matches =
    q.length > 0
      ? branches
          .filter(
            (b) =>
              b.name.toLowerCase().includes(q) ||
              b.addressShort.toLowerCase().includes(q) ||
              b.pastorName.toLowerCase().includes(q)
          )
          .slice(0, 6)
      : [];

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setSearchOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const goToBranch = (slug, districtSlug) => {
    navigate(`/locations/${districtSlug}/${slug}`);
    setSearchOpen(false);
    setQuery('');
    setMobileMenuOpen(false);
  };

  const handleNavClick = () => setMobileMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (matches.length > 0) {
      goToBranch(matches[0].slug, matches[0].districtSlug);
    } else if (q.length > 0) {
      navigate('/locations');
      setSearchOpen(false);
      setQuery('');
      setMobileMenuOpen(false);
    }
  };

  const renderDesktopCta = () => {
    if (variant === 'branch') {
      return (
        <Link
          to="/join"
          onClick={handleNavClick}
          className="inline-flex items-center justify-center bg-[#00236F] text-white font-bold text-[14px] leading-5 tracking-[0.7px] px-6 py-2 rounded-[12px] no-underline shadow-sm whitespace-nowrap transition-opacity duration-150 hover:opacity-90"
        >
          Join Us
        </Link>
      );
    }
    if (variant === 'district') {
      return (
        <Link
          to="/join"
          onClick={handleNavClick}
          className="inline-flex items-center justify-center bg-[#FFC329] text-[#6F5100] font-bold text-[14px] leading-5 tracking-[0.7px] px-6 py-2 rounded-[12px] no-underline shadow-sm whitespace-nowrap transition-opacity duration-150 hover:opacity-90"
        >
          Join Us
        </Link>
      );
    }
    return (
      <Link
        to="/give"
        onClick={handleNavClick}
        className="inline-flex items-center justify-center bg-[#FFC329] text-[#6F5100] font-bold text-[14px] leading-5 tracking-[0.7px] px-6 py-2 rounded-[12px] no-underline shadow-sm whitespace-nowrap transition-opacity duration-150 hover:opacity-90"
      >
        Give
      </Link>
    );
  };

  const renderMobileCta = () => {
    if (variant === 'branch') {
      return (
        <Link
          to="/join"
          onClick={handleNavClick}
          className="inline-flex items-center justify-center bg-[#00236F] text-white font-bold text-[15px] leading-[22px] px-5 py-3.5 rounded-[12px] no-underline shadow-sm whitespace-nowrap"
        >
          Join Us
        </Link>
      );
    }
    if (variant === 'district') {
      return (
        <Link
          to="/join"
          onClick={handleNavClick}
          className="inline-flex items-center justify-center bg-[#FFC329] text-[#6F5100] font-bold text-[15px] leading-[22px] px-5 py-3.5 rounded-[12px] no-underline shadow-sm whitespace-nowrap"
        >
          Join Us
        </Link>
      );
    }
    return (
      <Link
        to="/give"
        onClick={handleNavClick}
        className="inline-flex items-center justify-center bg-[#FFC329] text-[#6F5100] font-bold text-[15px] leading-[22px] px-5 py-3.5 rounded-[12px] no-underline shadow-sm whitespace-nowrap text-center"
      >
        Give
      </Link>
    );
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center box-border bg-white border-b border-[#f0f0f0]"
      style={{ height: '80px' }}
    >
      <div
        className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between box-border gap-4"
      >
        {/* Brand Logo & Name */}
        <Link to="/" className="inline-flex items-center gap-3 no-underline" aria-label="NCEM Home">
          <img src={Logo} alt="New Creature Evangelical Ministry Logo" className="w-12 h-12 object-contain" />
          <span
            className="font-bold text-[#00236F]"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', lineHeight: '30px' }}
          >
            NCEM
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = link.key === active;
              return (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative inline-flex items-center no-underline transition-colors duration-150 hover:text-[#00236F] ${
                      isActive ? 'text-[#00236F] font-bold' : 'text-[#444651] font-semibold'
                    }`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0.7px',
                      padding: '4px 0',
                    }}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span
                        className="absolute left-0 bottom-0 w-full h-[2px]"
                        style={{ backgroundColor: '#FFC329' }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action area (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {variant === 'branch' && (
            <div className="relative flex items-center" ref={wrapperRef}>
              <button
                type="button"
                className="all-unset cursor-pointer inline-flex items-center justify-center w-[18px] h-[18px]"
                aria-label="Search branches"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((v) => !v)}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.9167 11.6667H12.0917L11.8 11.3833C12.8083 10.2083 13.4167 8.68333 13.4167 7.02083C13.4167 3.34167 10.4333 0.358337 6.75417 0.358337C3.075 0.358337 0.0916748 3.34167 0.0916748 7.02083C0.0916748 10.7 3.075 13.6833 6.75417 13.6833C8.41667 13.6833 9.94167 13.075 11.1167 12.0667L11.4 12.3583V13.1833L16.4167 18.1917L17.925 16.6833L12.9167 11.6667ZM6.75417 11.6667C4.175 11.6667 2.09167 9.58333 2.09167 7.02083C2.09167 4.45833 4.175 2.375 6.75417 2.375C9.33333 2.375 11.4167 4.45833 11.4167 7.02083C11.4167 9.58333 9.33333 11.6667 6.75417 11.6667Z"
                    fill="#444651"
                  />
                </svg>
              </button>

              {searchOpen && (
                <form
                  className="absolute right-0 bg-white border border-[#c5c5d3] rounded-lg shadow-md p-2 z-[60] w-[calc(100vw-32px)] md:w-[280px]"
                  style={{ top: 'calc(100% + 12px)' }}
                  onSubmit={handleSubmit}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    className="w-full box-border border border-[#c5c5d3] rounded p-2 text-sm text-[#151c27] outline-none focus:outline-2 focus:outline-[#00236F] focus:-outline-offset-1"
                    placeholder="Search branches..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search branches by name, address, or pastor"
                  />
                  {q.length > 0 && (
                    <ul className="list-none m-0 mt-2 p-0 max-h-60 overflow-y-auto">
                      {matches.length === 0 ? (
                        <li className="px-2.5 py-2 text-[13px] text-[#757682]">
                          No branches match "{query}"
                        </li>
                      ) : (
                        matches.map((b) => (
                          <li key={b.slug}>
                            <button
                              type="button"
                              className="all-unset flex flex-col w-full box-border px-2.5 py-2 cursor-pointer rounded hover:bg-[#f0f3ff]"
                              onClick={() => goToBranch(b.slug, b.districtSlug)}
                            >
                              <span className="font-semibold text-sm text-[#00236F]">{b.name}</span>
                              <span className="text-xs text-[#757682]">{b.addressShort}</span>
                            </button>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </form>
              )}
            </div>
          )}

          {renderDesktopCta()}
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 p-0 bg-transparent border-none cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span className="relative inline-block w-6 h-[18px]">
            <span
              className="absolute left-0 w-full h-0.5 bg-[#00236F] rounded transition-all duration-200"
              style={{
                top: mobileMenuOpen ? '8px' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg)' : 'none',
              }}
            />
            <span
              className="absolute left-0 w-full h-0.5 bg-[#00236F] rounded transition-opacity duration-200"
              style={{ top: '8px', opacity: mobileMenuOpen ? '0' : '1' }}
            />
            <span
              className="absolute left-0 w-full h-0.5 bg-[#00236F] rounded transition-all duration-200"
              style={{
                top: mobileMenuOpen ? '8px' : '16px',
                transform: mobileMenuOpen ? 'rotate(-45deg)' : 'none',
              }}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-nav-menu"
          className="lg:hidden fixed left-0 w-full bg-white border-t border-[#e5e5ee] shadow-xl p-4 pb-6 box-border z-40 overflow-y-auto"
          style={{
            top: '80px',
            maxHeight: 'calc(100vh - 80px)',
            animation: 'mobileDrawerFadeIn 0.18s ease-out',
          }}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <ul className="list-none m-0 p-0 flex flex-col">
            {navLinks.map((link) => {
              const isActive = link.key === active;
              return (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={handleNavClick}
                    className={`block w-full box-border px-3 py-3.5 rounded-lg border-b border-[#eeeef4] no-underline transition-colors duration-150 ${
                      isActive
                        ? 'text-[#00236F] font-bold bg-[#f0f3ff]'
                        : 'text-[#444651] font-semibold hover:bg-[#f0f3ff] hover:text-[#00236F]'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '22px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-[#eeeef4] flex flex-col gap-3">
            {renderMobileCta()}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
