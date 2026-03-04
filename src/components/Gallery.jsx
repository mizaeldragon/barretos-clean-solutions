import React, { useState } from 'react';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Residential', 'Commercial', 'Post-Construction', 'Windows'];

    const galleryItems = [
        { id: 1, category: 'Residential', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1374&auto=format&fit=crop', title: 'Living Room Clean' },
        { id: 2, category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop', title: 'Corporate Office' },
        { id: 3, category: 'Residential', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1470&auto=format&fit=crop', title: 'Bathroom Sanitization' },
        { id: 4, category: 'Commercial', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1469&auto=format&fit=crop', title: 'Conference Room' },
        { id: 5, category: 'Post-Construction', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop', title: 'Empty House Prep' },
        { id: 6, category: 'Residential', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1470&auto=format&fit=crop', title: 'Kitchen Deep Clean' }
    ];

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <section id="gallery" className="py-24 bg-white scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-brand-teal uppercase mb-3">Our Work</h2>
                    <p className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Barretos Clean Solutions in Action</p>
                    <p className="text-brand-slate text-lg">Browse our gallery to see the transformative results of our professional cleaning services.</p>
                </div>

                {/* Filters */}
                <div className="scroll-reveal flex flex-wrap justify-center gap-4 mb-12" data-delay="1">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-8 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 ${activeFilter === filter
                                ? 'bg-gradient-to-r from-[#13817a] to-[#14C8B0] text-white shadow-sm'
                                : 'bg-[#eff7f6] text-[#2c7a7b] hover:bg-[#e2efec] hover:text-[#1a5b55]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map(item => (
                        <div key={item.id} className="scroll-reveal group relative aspect-video sm:aspect-square overflow-hidden rounded-2xl cursor-pointer" data-delay={(item.id % 3) + 1}>
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-brand-teal text-sm font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</p>
                                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <button className="inline-flex items-center justify-center px-10 py-3.5 text-[#14C8B0] font-bold text-[17px] bg-white border-[2.5px] border-[#14C8B0] rounded-full hover:bg-[#f0fbf9] transition-colors duration-300">
                        View More Projects
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default Gallery;
