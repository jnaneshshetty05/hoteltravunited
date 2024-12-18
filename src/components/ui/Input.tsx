import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
}

const Input = ({ icon, label, className, ...props }: InputProps) => {
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            icon && 'pl-10',
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;