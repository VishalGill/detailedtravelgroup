import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Detailed Travel Group.',
};

export default function PrivacyPage() {
    return (
        <div className="pt-[110px] pb-20">
            <div className="max-w-[1000px] mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">
                    Privacy Policy
                </h1>
                <p className="text-neutral-500 text-center mb-16">
                    Last Updated: November 19, 2025
                </p>

                <div className="prose prose-lg max-w-none text-neutral-600 font-sans">
                    <p className="mb-6">
                        At Detailed Travel Group ("we," "our," or "us"), we are committed to protecting the privacy and security of our clients' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website and concierge services.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Personal identification information (Name, email address, phone number, mailing address)</li>
                        <li>Travel preferences and dietary requirements</li>
                        <li>Payment information (processed securely through our banking partners)</li>
                        <li>Passport and visa details for travel bookings</li>
                    </ul>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">2. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Provide, operate, and maintain our concierge services</li>
                        <li>Process transactions and bookings</li>
                        <li>Send you updates, newsletters, and marketing communications (which you can opt out of)</li>
                        <li>Understand and analyze how you use our services to improve them</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
                    </ul>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">3. Disclosure of Your Information</h2>
                    <p className="mb-6">
                        We may share your information with third-party service providers (such as airlines, hotels, and transport companies) strictly for the purpose of fulfilling your service requests. We do not sell, trade, or rent your personal identification information to others.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">4. Data Security</h2>
                    <p className="mb-6">
                        We implement appropriate technical and organizational security measures to protect your personal information. However, please be aware that no method of transmission over the Internet is 100% secure.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">5. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="font-semibold text-black">
                        Detailed Travel Group<br />
                        concierge@detailedtravelgroup.com<br />
                        +1 (555) DTG-LUXE
                    </p>
                </div>
            </div>
        </div>
    );
}
