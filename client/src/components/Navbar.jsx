import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">CommercialNest</NavLink>
                    </div>

                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <span className={isMobileMenuOpen ? 'line rotate1' : 'line'}></span>
                        <span className={isMobileMenuOpen ? 'line hide' : 'line'}></span>
                        <span className={isMobileMenuOpen ? 'line rotate2' : 'line'}></span>
                    </div>

                    <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/properties" onClick={() => setIsMobileMenuOpen(false)}>Properties</NavLink>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <NavLink to="/logout" onClick={() => setIsMobileMenuOpen(false)}>Logout</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
