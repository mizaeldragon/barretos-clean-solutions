import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactInfoBox = ({ icon: Icon, title, content, subContent }) => (
    <div className="flex gap-4 items-center p-6 bg-white rounded-[16px] border border-[#E8EFFF] shadow-[0_8px_22px_rgba(37,99,255,0.1)] cursor-pointer">
        <div className="w-[44px] h-[44px] bg-gradient-to-r from-[#1E40FF] to-[#38C6FF] text-white rounded-[12px] flex items-center justify-center shrink-0">
            <Icon size={20} strokeWidth={2.5} />
        </div>
        <div>
            <h4 className="font-bold text-[#64748B] text-[11px] tracking-wider uppercase mb-0.5">{title}</h4>
            <p className="font-bold text-[#1E3A8A] text-[15px]">{content}</p>
            {subContent && <p className="text-[#94A3B8] text-[12px] mt-0.5">{subContent}</p>}
        </div>
    </div>
);

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [phoneError, setPhoneError] = useState('');

    const smsNumber = '+5599984735063';
    const whatsappNumber = '5511999999999';

    const formatPhone = (value) => {
        const raw = value.replace(/\D/g, '').slice(0, 11);
        const hasCountryCode = raw.startsWith('1');
        const digits = hasCountryCode ? raw.slice(1) : raw.slice(0, 10);

        if (!digits.length) return hasCountryCode ? '+1 ' : '';

        let formatted = '';
        if (digits.length <= 3) {
            formatted = `(${digits}`;
        } else if (digits.length <= 6) {
            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        } else {
            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
        }

        return hasCountryCode ? `+1 ${formatted}` : formatted;
    };

    const isValidPhone = (value) => {
        const raw = value.replace(/\D/g, '');
        const digits = raw.startsWith('1') ? raw.slice(1) : raw;
        return digits.length === 10;
    };

    const handleChange = (event) => {
        const { id, value } = event.target;

        if (id === 'phone') {
            setFormData((prev) => ({ ...prev, phone: formatPhone(value) }));
            setPhoneError('');
            return;
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const buildMessage = () => {
        const serviceLabelMap = {
            residential: 'Residential Cleaning',
            commercial: 'Commercial Cleaning',
            'post-construction': 'Post-Construction',
            windows: 'Windows Cleaning'
        };

        const serviceLabel = serviceLabelMap[formData.service] || formData.service || 'Not informed';

        return [
            'New quote request:',
            `Name: ${formData.name}`,
            `Phone: ${formData.phone}`,
            `Email: ${formData.email || 'Not informed'}`,
            `Service: ${serviceLabel}`,
            `Message: ${formData.message || 'Not informed'}`
        ].join('\n');
    };

    const validateBeforeSend = () => {
        if (formRef.current && !formRef.current.reportValidity()) {
            return false;
        }

        if (!isValidPhone(formData.phone)) {
            setPhoneError('Enter a valid US phone number (e.g. +1 (555) 123-4567).');
            return false;
        }

        setPhoneError('');
        return true;
    };

    const openSms = () => {
        if (!validateBeforeSend()) return;

        const message = encodeURIComponent(buildMessage());
        const cleanSmsNumber = smsNumber.replace(/[^\d+]/g, '');
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const separator = isIOS ? '&' : '?';

        window.location.href = `sms:${cleanSmsNumber}${separator}body=${message}`;
    };

    const openWhatsapp = () => {
        if (!validateBeforeSend()) return;

        const message = encodeURIComponent(buildMessage());
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        openSms();
    };

    return (
        <section id="contact" className="py-24 bg-[#F1F5FF] relative scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-[#1E40FF] font-bold tracking-[0.2em] text-[11px] uppercase block">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl md:text-[42px] font-bold text-[#1E3A8A] tracking-tight">
                        Contact Us
                    </h2>
                    <p className="text-[#64748B] text-[17px] font-medium">
                        Request your free quote. We respond within 2 hours!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                    {/* Left Column: Contact Form */}
                    <div className="scroll-reveal bg-white rounded-[24px] p-8 md:p-10 shadow-[0_14px_34px_rgba(37,99,255,0.12)] border border-[#E8EFFF]" data-reveal="left">
                        <h3 className="text-[20px] font-bold text-[#1E3A8A] mb-8">Request a Quote</h3>

                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[13px] font-semibold text-[#64748B]">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-[#DFE7FF] rounded-[10px] focus:ring-2 focus:ring-[#38C6FF] focus:border-transparent outline-none transition-all placeholder:text-[#A3B1C6] text-[14px]"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[13px] font-semibold text-[#64748B]">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-[#DFE7FF] rounded-[10px] focus:ring-2 focus:ring-[#38C6FF] focus:border-transparent outline-none transition-all placeholder:text-[#A3B1C6] text-[14px]"
                                        placeholder="+1 (555) 123-4567"
                                        inputMode="numeric"
                                        required
                                    />
                                    {phoneError && <p className="text-[12px] text-red-500">{phoneError}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[13px] font-semibold text-[#64748B]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-[#DFE7FF] rounded-[10px] focus:ring-2 focus:ring-[#38C6FF] focus:border-transparent outline-none transition-all placeholder:text-[#A3B1C6] text-[14px]"
                                    placeholder="you@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-[13px] font-semibold text-[#64748B]">Service Type *</label>
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-[#DFE7FF] rounded-[10px] focus:ring-2 focus:ring-[#38C6FF] focus:border-transparent outline-none transition-all text-[#1E3A8A] text-[14px] appearance-none"
                                    required
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="residential">Residential Cleaning</option>
                                    <option value="commercial">Commercial Cleaning</option>
                                    <option value="post-construction">Post-Construction</option>
                                    <option value="windows">Windows Cleaning</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[13px] font-semibold text-[#64748B]">Message</label>
                                <textarea
                                    id="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-[#DFE7FF] rounded-[10px] focus:ring-2 focus:ring-[#38C6FF] focus:border-transparent outline-none transition-all resize-none placeholder:text-[#A3B1C6] text-[14px]"
                                    placeholder="Describe the service you need, space size, preferred date..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#1E40FF] to-[#38C6FF] hover:opacity-95 text-white font-bold py-3.5 px-8 rounded-full shadow-md flex items-center justify-center gap-2 transition-opacity duration-300 text-[15px]"
                                >
                                    <Send size={18} /> Send via SMS
                                </button>
                                <button
                                    type="button"
                                    onClick={openWhatsapp}
                                    className="w-full bg-gradient-to-r from-[#1E40FF] to-[#38C6FF] hover:opacity-95 text-white font-bold py-3.5 px-8 rounded-full shadow-md flex items-center justify-center gap-2 transition-opacity duration-300 text-[15px]"
                                >
                                    <Send size={18} /> Send via WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Contact Details */}
                    <div className="scroll-reveal flex flex-col gap-4" data-reveal="right" data-delay="1">
                        <ContactInfoBox
                            icon={Phone}
                            title="PHONE / WHATSAPP"
                            content="(11) 99999-9999"
                            subContent="Mon-Fri: 7am-6pm | Sat: 8am-2pm"
                        />
                        <ContactInfoBox
                            icon={Mail}
                            title="EMAIL"
                            content="contact@barretoscleansolutions.com"
                            subContent="We respond within 2 hours"
                        />
                        <ContactInfoBox
                            icon={MapPin}
                            title="ADDRESS"
                            content="123 Flores St - Downtown"
                            subContent="Sao Paulo - SP, 01310-100"
                        />

                        {/* Social Media */}
                        <div className="bg-white p-6 rounded-[16px] border border-[#E8EFFF] shadow-[0_8px_22px_rgba(37,99,255,0.1)] mt-1 cursor-pointer">
                            <h4 className="font-bold text-[#1E3A8A] text-[13px] mb-4">Follow us on social media</h4>
                            <div className="flex flex-wrap gap-2.5">
                                <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#ed4956] to-[#f77737] text-white rounded-[12px] text-[13px] font-semibold hover:opacity-90 transition-opacity">
                                    <Instagram size={16} /> Instagram
                                </a>
                                <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1E40FF] to-[#38C6FF] text-white rounded-[12px] text-[13px] font-semibold hover:opacity-90 transition-opacity">
                                    <Facebook size={16} /> Facebook
                                </a>
                                <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-l from-[#1D4ED8] to-[#38C6FF] text-white rounded-[12px] text-[13px] font-semibold hover:opacity-90 transition-opacity">
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Map Placeholder - replace query/address later with your real location */}
                        <div className="w-full h-[190px] bg-gray-200 rounded-[16px] overflow-hidden relative shadow-[0_8px_22px_rgba(37,99,255,0.1)] mt-1 border border-[#E8EFFF] cursor-pointer">
                            <iframe
                                title="Company Location Map"
                                src="https://www.google.com/maps?q=Sao+Paulo+SP&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;


