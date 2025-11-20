'use client';

import { useState } from 'react';

export default function MembershipPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'Gold Membership',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your interest. A membership director will contact you shortly.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-primary-dark text-white py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
                        Membership
                    </h1>
                    <p className="text-xl text-neutral-300 font-light max-w-2xl mx-auto">
                        Access the inaccessible. Our membership tiers are designed for those who demand the exceptional in every aspect of their lives.
                    </p>
                </div>
            </section>

            {/* Tiers */}
            <section className="py-24 px-6 bg-neutral-50">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Silver */}
                        <div className="bg-white p-10 shadow-sm border-t-4 border-neutral-400">
                            <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-2">Silver</h3>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-8">Essential Access</p>
                            <ul className="space-y-4 text-neutral-600 mb-12">
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Global Hotel Privileges
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Priority Dining Reservations
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Commercial Travel Management
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Event Access (General)
                                </li>
                            </ul>
                            <p className="text-3xl font-playfair font-bold text-primary-dark mb-2">$5,000</p>
                            <p className="text-xs text-neutral-400 mb-8">/ Annual</p>
                            <button className="w-full py-4 border border-primary-dark text-primary-dark font-bold uppercase tracking-widest hover:bg-primary-dark hover:text-white transition-colors">
                                Select Silver
                            </button>
                        </div>

                        {/* Gold */}
                        <div className="bg-white p-10 shadow-lg border-t-4 border-secondary transform md:-translate-y-4 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 uppercase tracking-widest">
                                Most Popular
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-2">Gold</h3>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-8">Elevated Lifestyle</p>
                            <ul className="space-y-4 text-neutral-600 mb-12">
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    All Silver Benefits
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Dedicated Lifestyle Manager
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Private Aviation Charter Rates
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    VIP Event Access (Backstage/Red Carpet)
                                </li>
                            </ul>
                            <p className="text-3xl font-playfair font-bold text-primary-dark mb-2">$12,000</p>
                            <p className="text-xs text-neutral-400 mb-8">/ Annual</p>
                            <button className="w-full py-4 bg-secondary text-white font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors">
                                Select Gold
                            </button>
                        </div>

                        {/* Black */}
                        <div className="bg-primary-dark p-10 shadow-sm border-t-4 border-black text-white">
                            <h3 className="text-2xl font-playfair font-bold text-white mb-2">Black</h3>
                            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-8">Limitless</p>
                            <ul className="space-y-4 text-neutral-300 mb-12">
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    All Gold Benefits
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    24/7 Dedicated Team
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Executive Protection Services
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Rare Acquisition Service
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-3">✓</span>
                                    Invitation Only Events
                                </li>
                            </ul>
                            <p className="text-3xl font-playfair font-bold text-white mb-2">Inquire</p>
                            <p className="text-xs text-neutral-500 mb-8">/ By Invitation</p>
                            <button className="w-full py-4 bg-white text-primary-dark font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                                Inquire
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24 px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-bold text-primary-dark mb-4">
                            Apply for Membership
                        </h2>
                        <p className="text-neutral-500">
                            Please complete the form below. All applications are vetted by our membership committee.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-primary-dark transition-colors bg-transparent"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-primary-dark transition-colors bg-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-primary-dark transition-colors bg-transparent"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Membership Interest</label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-primary-dark transition-colors bg-transparent"
                                >
                                    <option value="Silver Membership">Silver Membership</option>
                                    <option value="Gold Membership">Gold Membership</option>
                                    <option value="Black Membership">Black Membership</option>
                                    <option value="Corporate Membership">Corporate Membership</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Additional Information</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-primary-dark transition-colors bg-transparent resize-none"
                                placeholder="Please tell us about your lifestyle requirements..."
                            />
                        </div>

                        <div className="pt-8 text-center">
                            <button
                                type="submit"
                                className="px-12 py-4 bg-primary-dark text-white font-bold tracking-widest uppercase hover:bg-secondary transition-colors duration-300"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
