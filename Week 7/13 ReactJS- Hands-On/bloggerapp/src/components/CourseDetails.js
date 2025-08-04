import React from 'react';
import '../App.css';

function CourseDetails() {
  const courses = [
    { name: 'Python Basics', date: '10/10/2023' },
    { name: 'React Advanced', date: '12/12/2023' }
  ];

  return (
    <div className="section">
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
