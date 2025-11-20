import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Detailed Travel Group.',
};

export default function TermsPage() {
    return (
        <div className="pt-[110px] pb-20">
            <div className="max-w-[1000px] mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">
                    Terms of Service
                </h1>
                <p className="text-neutral-500 text-center mb-16">
                    Last Updated: November 19, 2025
                </p>

                <div className="prose prose-lg max-w-none text-neutral-600 font-sans">
                    <p className="mb-6">
                        Please read these Terms of Service ("Terms") carefully before using the Detailed Travel Group website and services. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">1. Services</h2>
                    <p className="mb-6">
                        Detailed Travel Group provides luxury concierge and travel planning services. We act as an intermediary between you and third-party suppliers (airlines, hotels, etc.). While we strive to ensure the highest quality, we are not responsible for the acts or omissions of these third-party suppliers.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">2. Membership and Payments</h2>
                    <p className="mb-6">
                        Membership fees are non-refundable. Services requested outside of the membership scope may incur additional charges. All payments must be made in accordance with the payment terms specified at the time of booking.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">3. Cancellations and Refunds</h2>
                    <p className="mb-6">
                        Cancellation policies vary by service and supplier. It is your responsibility to review the specific cancellation terms for each booking. Detailed Travel Group service fees are generally non-refundable once the service has been rendered or the booking confirmed.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">4. Limitation of Liability</h2>
                    <p className="mb-6">
                        In no event shall Detailed Travel Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">5. Governing Law</h2>
                    <p className="mb-6">
                        These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">6. Changes</h2>
                    <p className="mb-6">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
                    </p>

                    <h2 className="text-2xl font-playfair font-bold text-black mt-12 mb-6">7. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about these Terms, please contact us at:
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
