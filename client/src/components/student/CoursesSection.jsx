import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className="text-3xl font-medium text-gray-800">Learn from the best.</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 mb-3">
  Discover a wide range of courses designed to help you build skills,
  grow your career, and achieve your learning goals with expert instructors
  and practical content.
</p>

<Link to={'/course-list'} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
 onClick={()=> scrollTo(0,0)}>Show All Courses</Link>
    </div>
  )
}

export default CoursesSection
