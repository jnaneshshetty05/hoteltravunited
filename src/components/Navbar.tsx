import React from 'react';
import { Hotel, Plane, CreditCard, Palmtree } from 'lucide-react';
import Button from './ui/Button';
import { cn } from '../utils/cn';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">TravUnited</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
          <NavItem 
  icon={<Plane className="w-5 h-5" />} 
  text="Flights" 
  url="https://flights.travunited.net" 
/>
<NavItem 
  icon={<Hotel className="w-5 h-5" />} 
  text="Hotels" 
  url="https://hotels.travunited.net" 
  active 
/>
<NavItem 
  icon={<CreditCard className="w-5 h-5" />} 
  text="Visa" 
  url="https://visa.travunited.net" 
/>
<NavItem 
  icon={<Palmtree className="w-5 h-5" />} 
  text="Holidays" 
  url="https://holidays.travunited.net" 
/>

          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="secondary">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const NavItem = ({ icon, text, active = false }: NavItemProps) => {
  return (
    <a
      href="#"
      className={cn(
        'flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium',
        active ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      )}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Navbar;