import React from 'react';
import { cn } from '../../utils/cn';

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

export default NavItem;