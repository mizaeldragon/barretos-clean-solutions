import React from 'react';
import whatssapIcon from '../assets/images/whatssap.png';

const WhatsAppFloatButton = () => {
    const whatsappNumber = '15514075453';
    const defaultMessage = encodeURIComponent('Hi! I would like to request a quote.');

    return (
        <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] w-16 h-16 md:w-20 md:h-20">
            <span className="absolute inset-0 rounded-full bg-[#25D366]/20 blur-md animate-pulse pointer-events-none"></span>

            <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="whatsapp-pulse relative w-full h-full rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_16px_34px_rgba(37,211,102,0.45)] transition-all duration-300 flex items-center justify-center"
            >
                <img src={whatssapIcon} alt="WhatsApp" className="w-10 h-10 md:w-11 md:h-11 object-contain" />
            </a>
        </div>
    );
};

export default WhatsAppFloatButton;
