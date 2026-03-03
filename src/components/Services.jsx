import React from 'react';
import { Home, Building2, HardHat, Sparkles, CheckCircle2, MoveRight } from 'lucide-react';

import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.png';
import service3 from '../assets/images/service3.png';
import service4 from '../assets/images/service4.png';

const ServiceCard = ({ icon: Icon, title, description, features, image, revealDelay }) => {
    return (
        <div className="scroll-reveal bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,191,165,0.08)] flex flex-col group h-full" data-delay={revealDelay}>
            {/* Image Header */}
            <div className="h-[240px] relative overflow-hidden bg-slate-50">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Icon */}
                <div className="absolute top-6 left-6 z-30 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-teal">
                    <Icon strokeWidth={2.5} size={22} />
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-[22px] font-bold text-[#145a55] mb-3">{title}</h3>
                <p className="text-[#648481] text-[15px] mb-8 leading-relaxed">
                    {description}
                </p>

                <ul className="space-y-3.5 mb-10 flex-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 size={18} strokeWidth={2.5} className="shrink-0 mt-[2px] text-brand-teal" />
                            <span className="text-[14.5px] text-[#4f6f6c]">{feature}</span>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="inline-flex items-center gap-2 text-[14.5px] font-bold text-brand-teal hover:text-brand-darkTeal transition-colors group/link mt-auto">
                    Request a Quote
                    <MoveRight size={16} strokeWidth={2.5} className="transition-transform group-hover/link:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

const Services = () => {
    const servicesData = [
        {
            icon: Home,
            title: 'Residential Cleaning',
            description: 'Your home deserves the best care. We provide a complete and detailed cleaning of every room in your house.',
            image: service1,
            features: [
                'Full room cleaning',
                'Bathroom & kitchen sanitizing',
                'Floor vacuuming & washing',
                'Interior window cleaning'
            ]
        },
        {
            icon: Building2,
            title: 'Commercial Cleaning',
            description: 'Clean corporate environments convey professionalism and boost team productivity.',
            image: service2,
            features: [
                'Offices & meeting rooms',
                'Lobbies & common areas',
                'Corporate restrooms',
                'Scheduled maintenance'
            ]
        },
        {
            icon: HardHat,
            title: 'Post-Construction Cleaning',
            description: 'After renovations or construction, we remove all debris and leave the space ready for immediate use.',
            image: service3,
            features: [
                'Debris & dust removal',
                'Floor & tile cleaning',
                'Paint residue removal',
                'Final polishing & finishing'
            ]
        },
        {
            icon: Sparkles,
            title: 'Windows & Facades',
            description: 'Specialized cleaning of exterior windows and building facades at height with proper equipment and full safety.',
            image: service4,
            features: [
                'High-rise exterior windows',
                'Building facades',
                'Specialized equipment',
                'Height-certified team'
            ]
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#f4f7f9] scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[13px] font-bold tracking-[0.15em] text-brand-teal uppercase mb-4">WHAT WE DO</h2>
                    <p className="text-4xl md:text-5xl font-bold text-[#145a55] mb-5">Our Services</p>
                    <p className="text-[#648481] text-[17px] leading-relaxed max-w-2xl mx-auto">
                        Complete cleaning solutions for homes, businesses, and construction sites. Quality and trust in every service.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-[30px]">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} revealDelay={(index % 3) + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
