import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Calendar } from 'lucide-react';

interface CourseCardProps {
  id: number;
  title: string;
  category: string;
  duration: string;
  startDate: string;
  image: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  category,
  duration,
  startDate,
  image,
  description,
}) => {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-2" />
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={16} className="mr-2" />
          <span>Starting: {startDate}</span>
        </div>
      </div>
      <div className="mt-auto pt-4 border-t flex justify-between items-center">
        <Link
          to={`/courses#course-${id}`}
          className="text-primary font-medium hover:underline"
        >
          View Details
        </Link>
        <Link to="/admission" className="btn btn-sm btn-primary">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;