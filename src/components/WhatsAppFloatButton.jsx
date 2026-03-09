import React from 'react';
import whatssapIcon from '../assets/images/whatssap.png';

const WhatsAppFloatButton = () => {
    const whatsappNumber = '15514075453';
    const defaultMessage = encodeURIComponent('Hi! I would like to request a quote.');

    return (
        <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] w-20 h-20 md:w-24 md:h-24">
            <span className="absolute inset-0 rounded-full bg-[#25D366]/18 blur-lg animate-pulse pointer-events-none"></span>

            <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="whatsapp-pulse relative w-full h-full rounded-full bg-[#25D366]/78 backdrop-blur-[2px] text-white shadow-[0_12px_28px_rgba(37,211,102,0.3)] hover:scale-105 hover:shadow-[0_16px_34px_rgba(37,211,102,0.42)] transition-all duration-300 flex items-center justify-center border border-white/35"
            >
                <img src={whatssapIcon} alt="WhatsApp" className="w-11 h-11 md:w-16 md:h-16 object-contain" />
            </a>
        </div>
    );
};

export default WhatsAppFloatButton;
