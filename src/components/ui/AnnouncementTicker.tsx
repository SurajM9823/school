import React from 'react';

interface AnnouncementTickerProps {
  announcements: string[];
}

const AnnouncementTicker: React.FC<AnnouncementTickerProps> = ({ announcements }) => {
  return (
    <div className="bg-primary text-white py-2 px-4">
      <div className="ticker-container">
        <div className="ticker-content">
          {announcements.map((announcement, index) => (
            <span key={index} className="inline-block mx-8">
              📢 {announcement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;