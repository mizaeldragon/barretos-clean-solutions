import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-[#1E40FF]">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                    alt="Clean and modern office space"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1E40FF]/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[#0A1535]/75"></div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

                {/* Badge */}
                <div className="scroll-reveal inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
                    <Sparkles className="text-[#f5a623]" size={16} fill="currentColor" />
                    <span className="text-white text-sm font-bold tracking-wide">
                        Trusted Professional Cleaning
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="scroll-reveal text-5xl sm:text-6xl md:text-[5.5rem] font-bold text-white mb-6 md:leading-[1.1] tracking-tight" data-delay="1">
                    Clean Spaces,<br />
                    <span className="text-[#9be7ea]">Happier Life</span>
                </h1>

                {/* Description */}
                <p className="scroll-reveal mt-2 text-lg md:text-[20px] text-white max-w-[800px] mx-auto mb-12 font-normal leading-relaxed" data-delay="2">
                    We offer residential, commercial, post-construction, and facade cleaning services with a trained team, quality products, and guaranteed punctuality.
                </p>

                {/* CTA Buttons */}
                <div className="scroll-reveal flex flex-col sm:flex-row justify-center gap-5 mb-24 w-full relative z-10" data-delay="3">
                    <a href="#contact" className="bg-[#2563FF] text-white px-8 py-3.5 rounded-full font-bold text-[17px] hover:bg-[#4DA3FF] transition-colors shadow-lg shadow-[#2563FF]/30 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2">
                        Get a Free Quote <ArrowRight size={18} />
                    </a>
                    <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-[17px] hover:bg-white/10 transition-colors w-full sm:w-auto text-center inline-flex items-center justify-center gap-2">
                        Explore Our Services <ArrowRight size={18} />
                    </a>
                </div>

                {/* Stats Section */}
                <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mx-auto" data-delay="3">
                    {[
                        { num: '2+', label: 'Years of Experience' },
                        { num: '1,500+', label: 'Clients Served' },
                        { num: '98%', label: 'Satisfaction Rate' },
                        { num: '4', label: 'Service Types' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-[20px] p-4 border border-white/10 flex flex-col justify-center transition-colors hover:bg-white/15">
                            <div className="text-[40px] leading-tight mb-1 font-bold text-white tracking-tight">{stat.num}</div>
                            <div className="text-[13px] text-white font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;


