import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CoursesSection = () => {

  const { allCourses } = useContext(AppContext);

  return (
    <div className='py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
      
      <div className='text-center'>
        <h2 className='text-2xl sm:text-3xl font-medium text-gray-800'>
          Learn from the best.
        </h2>

        <p className='text-sm sm:text-base text-gray-500 mt-3 mb-10 max-w-3xl mx-auto'>
          Discover a wide range of courses designed to help you build skills,
          grow your career, and achieve your learning goals with expert
          instructors and practical content.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10'>
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <div className='flex justify-center'>
        <Link
          to='/course-list'
          className='text-gray-500 border border-gray-500/30 px-6 sm:px-8 py-3 rounded hover:bg-gray-50 transition'
          onClick={() => scrollTo(0, 0)}
        >
          Show All Courses
        </Link>
      </div>

    </div>
  );
};

export default CoursesSection;