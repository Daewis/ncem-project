import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/New Creature Evangelical Ministry Logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        if (!menuOpen) return;
        const handleClickOutside = (e) => {
            if (
                menuRef.current && !menuRef.current.contains(e.target) &&
                hamburgerRef.current && !hamburgerRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-offwhite/30 shadow-sm">
            <div className='flex items-center justify-between px-4 sm:px-10 md:px-10 lg:px-10 py-4 max-w-7xl mx-auto'>
                {/* Navbar Logo */}
                <div className='flex items-center gap-2'>
                    <Link to='/' onClick={closeMenu}>
                        <img src={Logo} alt="New Creature Evangelical Ministry Logo" className="h-10 w-auto" />
                    </Link>
                    <Link to='/' onClick={closeMenu} className='w-40 text-blue font-bold text-[24px] no-underline'>
                        NCEM
                    </Link>
                </div>

                {/* Desktop Navbar links */}
                <nav className='nav-item hidden md:flex items-center justify-between gap-5 font-semibold'>
                    <Link to='/' className="no-underline text-inherit">Home</Link>
                    <Link to='/about' className="no-underline text-inherit">About</Link>
                    <Link to='/locations' className="no-underline text-inherit">Locations</Link>
                    <Link className="no-underline text-inherit cursor-pointer">Events</Link>
                    <Link className="no-underline text-inherit cursor-pointer">Resources</Link>
                    <Link to='/contact' className="no-underline text-inherit">Contact</Link>
                </nav>

                {/* Desktop Navbar Button */}
                <button className='hidden md:inline-flex bg-yellow-300 px-5 py-2 rounded-md font-semibold cursor-pointer no-underline'>
                    <Link to='/givenow' className="no-underline text-inherit">Give now</Link>
                </button>

                {/* Mobile hamburger button */}
                <button
                    ref={hamburgerRef}
                    type="button"
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 p-0 bg-transparent border-none cursor-pointer"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav-menu"
                    onClick={() => setMenuOpen(v => !v)}
                >
                    <span className="relative inline-block w-6 h-[18px]">
                        <span
                            className="absolute left-0 w-full h-0.5 bg-blue rounded transition-all duration-200"
                            style={{ top: menuOpen ? '8px' : '0', transform: menuOpen ? 'rotate(45deg)' : 'none' }}
                        />
                        <span
                            className="absolute left-0 w-full h-0.5 bg-blue rounded transition-opacity duration-200"
                            style={{ top: '8px', opacity: menuOpen ? '0' : '1' }}
                        />
                        <span
                            className="absolute left-0 w-full h-0.5 bg-blue rounded transition-all duration-200"
                            style={{ top: menuOpen ? '8px' : '16px', transform: menuOpen ? 'rotate(-45deg)' : 'none' }}
                        />
                    </span>
                </button>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    id="mobile-nav-menu"
                    className="md:hidden absolute top-full left-0 w-full bg-white border-t border-offwhite/30 shadow-lg px-4 py-6 box-border"
                    role="dialog"
                    aria-label="Mobile navigation"
                >
                    <nav className="flex flex-col gap-1">
                        <Link to='/' onClick={closeMenu} className="no-underline text-offwhite font-semibold py-3 px-3 rounded hover:bg-[#f0f3ff] hover:text-blue">Home</Link>
                        <Link to='/about' onClick={closeMenu} className="no-underline text-offwhite font-semibold py-3 px-3 rounded hover:bg-[#f0f3ff] hover:text-blue">About</Link>
                        <Link to='/locations' onClick={closeMenu} className="no-underline text-offwhite font-semibold py-3 px-3 rounded hover:bg-[#f0f3ff] hover:text-blue">Locations</Link>
                        <Link className="no-underline text-offwhite font-semibold py-3 px-3 rounded hover:bg-[#f0f3ff] hover:text-blue">Events</Link>
                        <Link className="no-underline text-offwhite font-semibold py-3 px-3 rounded hover:bg-[#f0f3ff] hover:text-blue">Resources</Link>
                        <Link to='/contact' onClick={closeMenu} className="no-underline text-offwhite font-semibold py-3 px-3 rounded hover:bg-[#f0f3ff] hover:text-blue">Contact</Link>
                        <Link
                            to='/givenow'
                            onClick={closeMenu}
                            className="no-underline inline-flex items-center justify-center bg-yellow-300 px-5 py-3 rounded-md font-semibold text-black mt-3"
                        >
                            Give now
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
