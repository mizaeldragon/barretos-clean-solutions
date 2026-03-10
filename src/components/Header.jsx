import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

import logo from '../assets/images/logo-barretos.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#', label: 'Home', sectionId: 'home' },
        { href: '#services', label: 'Services', sectionId: 'services' },
        { href: '#about', label: 'About Us', sectionId: 'about' },
        { href: '#testimonials', label: 'Testimonials', sectionId: 'testimonials' },
        { href: '#gallery', label: 'Gallery', sectionId: 'gallery' },
        { href: '#contact', label: 'Contact', sectionId: 'contact' }
    ];

    useEffect(() => {
        const sections = navLinks
            .filter((link) => link.sectionId !== 'home')
            .map((link) => document.getElementById(link.sectionId))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target?.id) {
                    setActiveSection(visibleEntry.target.id);
                }
            },
            {
                threshold: 0.4,
                rootMargin: '-20% 0px -35% 0px'
            }
        );

        sections.forEach((section) => observer.observe(section));

        const handleTopState = () => {
            if (window.scrollY < 120) {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleTopState);
        handleTopState();

        return () => {
            window.removeEventListener('scroll', handleTopState);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (event, link) => {
        setActiveSection(link.sectionId);
        setIsMobileMenuOpen(false);

        if (link.sectionId === 'home') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className={`max-w-7xl mx-auto px-0 md:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'pt-0 md:pt-3' : 'pt-0'}`}>
                <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#0A1535]/90 backdrop-blur-md shadow-lg md:rounded-2xl md:border md:border-white/10 md:shadow-2xl px-4 md:px-6' : 'bg-transparent px-4 md:px-0'}`}>
                    <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer">
                        <img src={logo} alt="Barretos Cleaning Solutions" className={`w-auto drop-shadow-md transition-all duration-300 ${isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-24'}`} />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`px-3 py-1.5 rounded-full font-medium transition-colors ${activeSection === link.sectionId
                                    ? 'bg-white/15 text-white'
                                    : 'text-white/85 hover:text-white'
                                    }`}
                                onClick={(event) => handleNavClick(event, link)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <a href="#contact" className="hero-glow-btn hero-glow-strong group inline-flex items-center rounded-full p-[1px] bg-gradient-to-r from-[#29BCFF] via-[#2563FF] to-[#53C9FF] shadow-[0_10px_20px_rgba(37,99,255,0.28)] hover:shadow-[0_14px_24px_rgba(37,99,255,0.38)] transition-all">
                            <span className="hero-glow-inner px-5 py-2 rounded-full bg-gradient-to-r from-[#0A2A7A] to-[#1B55DA] text-white font-semibold inline-flex items-center gap-2">
                                Request a Quote <ArrowRight size={16} />
                            </span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white hover:text-white/80 transition-colors"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="md:hidden pb-4">
                            <nav className="rounded-2xl border border-white/20 bg-[#102A66]/92 backdrop-blur-md px-4 py-4 shadow-xl">
                                <div className="flex flex-col gap-3">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className={`px-3 py-2 rounded-lg font-medium transition-colors ${activeSection === link.sectionId
                                            ? 'bg-white/22 text-white'
                                                : 'text-white/90 hover:text-white'
                                                }`}
                                            onClick={(event) => handleNavClick(event, link)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 bg-gradient-to-r from-[#1E40FF] to-[#38C6FF] text-white px-5 py-2.5 rounded-full font-semibold transition-opacity hover:opacity-95 text-left inline-flex items-center gap-2">
                                        Request a Quote <ArrowRight size={16} />
                                    </a>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;



