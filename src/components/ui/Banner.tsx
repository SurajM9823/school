import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BannerProps {
  message: string;
  link?: {
    text: string;
    url: string;
  };
  variant?: 'default' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  message,
  link,
  variant = 'default',
  dismissible = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const getBgColor = () => {
    switch (variant) {
      case 'success':
        return 'bg-success text-white';
      case 'warning':
        return 'bg-warning text-white';
      case 'error':
        return 'bg-error text-white';
      default:
        return 'bg-primary text-white';
    }
  };

  return (
    <div className={`py-2 px-4 ${getBgColor()}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-sm md:text-base">
            {message}
            {link && (
              <a
                href={link.url}
                className="ml-2 font-medium underline hover:no-underline"
              >
                {link.text}
              </a>
            )}
          </p>
        </div>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white hover:opacity-75 focus:outline-none"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;