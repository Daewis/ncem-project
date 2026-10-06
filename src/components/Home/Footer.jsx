import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/New Creature Evangelical Ministry Logo.png';

const navItems = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'events', label: 'Events', href: '/events' },
];

const connectItems = [
  { key: 'locations', label: 'Locations', href: '/locations' },
  { key: 'resources', label: 'Resources', href: '/resources' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

const legalItems = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

// Derive activeNav from URL pathname
const useActiveNav = () => {
  const { pathname } = useLocation();
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/events')) return 'events';
  return null;
};

// Derive activeConnect from URL pathname
const useActiveConnect = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith('/locations')) return 'locations';
  if (pathname.startsWith('/resources')) return 'resources';
  if (pathname.startsWith('/contact')) return 'contact';
  return null;
};

const FooterLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`inline-block no-underline transition-colors duration-150 ${
      isActive
        ? 'text-[#f9bd22] font-semibold opacity-100'
        : 'text-[#dce2f3] font-normal opacity-80 hover:opacity-100 hover:text-white'
    }`}
    style={{ fontSize: '16px', lineHeight: '24px' }}
  >
    {children}
  </Link>
);

const Footer = () => {
  const activeNav = useActiveNav();
  const activeConnect = useActiveConnect();

  return (
    <footer
      className="flex flex-col w-full"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="w-full bg-[#232a3a]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto box-border px-4 md:px-6 py-14 md:py-20">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-3 no-underline"
              aria-label="NCEM Home"
            >
              <img src={Logo} alt="" className="w-12 h-12 object-contain" />
              <span
                className="text-white font-bold"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', lineHeight: '30px' }}
              >
                NCEM
              </span>
            </Link>
            <p className="m-0 text-[#dce2f3] text-base leading-6">
              Illuminating paths, fostering connections, and serving with purpose.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h4
              className="m-0 text-[#f9f9ff] font-semibold"
              style={{ fontSize: '14px', letterSpacing: '0.7px', lineHeight: '20px' }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              {navItems.map((item) => (
                <li key={item.key}>
                  <FooterLink to={item.href} isActive={item.key === activeNav}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4">
            <h4
              className="m-0 text-[#f9f9ff] font-semibold"
              style={{ fontSize: '14px', letterSpacing: '0.7px', lineHeight: '20px' }}
            >
              Connect
            </h4>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              {connectItems.map((item) => (
                <li key={item.key}>
                  <FooterLink to={item.href} isActive={item.key === activeConnect}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h4
              className="m-0 text-[#f9f9ff] font-semibold"
              style={{ fontSize: '14px', letterSpacing: '0.7px', lineHeight: '20px' }}
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              {legalItems.map((item) => (
                <li key={item.label}>
                  <FooterLink to={item.href} isActive={false}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="flex justify-center items-center w-full px-6 py-4 box-border"
        style={{ backgroundColor: '#151c27', borderTop: '1px solid rgba(220, 226, 243, 0.2)' }}
      >
        <p
          className="m-0 text-center text-[#dce2f3]"
          style={{ fontSize: '14px', lineHeight: '20px', opacity: '0.6' }}
        >
          © 2026 New Creature Evangelical Ministry. Built by Tech Disciples
        </p>
      </div>
    </footer>
  );
};

export default Footer;
