import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">

      {/* Course Image */}
      <img
        src={course.courseThumbnail}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {course.courseTitle}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {course.educator.name}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <p>4.5</p>

          <span className="font-medium text-blue-600">
            ${course.price}
          </span>

        </div>

      </div>
    </div>
  );
};

export default CourseCard;