import React from 'react';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="About TravelEase">
            <p className="text-gray-300">
              TravUnited is your trusted partner for finding the perfect accommodations worldwide. 
              We make booking hotels simple, secure, and enjoyable.
            </p>
          </FooterSection>

          <FooterSection title="Quick Links">
            <div className="space-y-2">
              <FooterLink href="/hotels">Hotels</FooterLink>
              <FooterLink href="/flights">Flights</FooterLink>
              <FooterLink href="/visa">Visa Services</FooterLink>
              <FooterLink href="/holidays">Holiday Packages</FooterLink>
            </div>
          </FooterSection>

          <FooterSection title="Support">
            <div className="space-y-2">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </div>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ContactInfo />
          </FooterSection>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} TravelUnited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;