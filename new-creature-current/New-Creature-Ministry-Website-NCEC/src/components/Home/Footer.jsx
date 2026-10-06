import { Link } from 'react-router-dom';
import Logo from '../../assets/New Creature Evangelical Ministry Logo.png';

const Footer = () => {
    return (
        <footer className="footer bg-[#232A3A] w-full">
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-start sm:justify-between items-start gap-10 sm:gap-12 max-w-7xl mx-auto px-6 lg:px-10 py-14 sm:py-20 box-border">
                {/* Brand column */}
                <div className="w-full sm:w-auto sm:max-w-xs">
                    <div className='flex justify-start items-center gap-4 mb-6'>
                        <img src={Logo} alt="NCEM logo" className="h-12 w-auto" />
                        <h2 className="font-bold text-[24px] text-primary m-0">NCEM</h2>
                    </div>
                    <p className="text-[15px] leading-6 text-secondary m-0">
                        Illuminating paths, fostering connections, and serving with purpose.
                    </p>
                </div>

                {/* Navigation */}
                <ul className="space-y-3 list-none p-0 m-0">
                    <li className="font-semibold text-[14px] text-primary">Navigation</li>
                    <li><Link to='/' className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Home</Link></li>
                    <li><Link to='/about' className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">About</Link></li>
                    <li><Link to='/locations' className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Locations</Link></li>
                    <li><Link className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Events</Link></li>
                </ul>

                {/* Connect */}
                <ul className="space-y-3 list-none p-0 m-0">
                    <li className="font-semibold text-[14px] text-primary">Connect</li>
                    <li><Link to='/locations' className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Locations</Link></li>
                    <li><Link className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Resources</Link></li>
                    <li><Link to='/contact' className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Contact</Link></li>
                </ul>

                {/* Legal */}
                <ul className="space-y-3 list-none p-0 m-0">
                    <li className="font-semibold text-[14px] text-primary">Legal</li>
                    <li><Link className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Privacy Policy</Link></li>
                    <li><Link className="hover:text-yellow cursor-pointer no-underline text-secondary block transition-colors">Terms of Service</Link></li>
                </ul>
            </div>

            <div className="border-t border-white/10 py-5">
                <p className="text-center text-[13px] sm:text-[15px] text-secondary/60 m-0 px-4">
                    © 2026 New Creature Evangelical Ministry. Built by Tech Disciples
                </p>
            </div>
        </footer>
    );
};

export default Footer;
