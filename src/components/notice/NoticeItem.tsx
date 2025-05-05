import React from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';

interface NoticeItemProps {
  title: string;
  date: string;
  category: string;
  content: string;
  isImportant?: boolean;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ 
  title, 
  date, 
  category,
  content,
  isImportant = false,
}) => {
  return (
    <div className={`card border-l-4 ${isImportant ? 'border-l-error' : 'border-l-primary'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
        <h3 className={`text-lg font-semibold ${isImportant ? 'text-error' : 'text-gray-800'}`}>
          {isImportant && <span className="inline-block bg-error text-white text-xs py-1 px-2 rounded mr-2">Important</span>}
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0">
          <Calendar size={16} className="mr-1" />
          <span className="mr-3">{date}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">{category}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <button className="text-primary hover:underline font-medium inline-flex items-center">
        <FileText size={16} className="mr-1" /> View Full Notice
      </button>
    </div>
  );
};

export default NoticeItem;