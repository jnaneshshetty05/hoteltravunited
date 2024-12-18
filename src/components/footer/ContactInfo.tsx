import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3 text-gray-300">
        <Phone className="h-5 w-5" />
        <span>+919035253867</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300">
        <Mail className="h-5 w-5" />
        <span>support@travunited.com</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300">
        <MapPin className="h-5 w-5" />
        <span>First floor, #F307 Regal Nxt, Near, Karavali Bypass, Adi-udupi <br />Karnataka, 576103</span>
      </div>
    </div>
  );
};

export default ContactInfo;