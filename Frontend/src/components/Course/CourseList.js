import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error.response ? error.response.data : error.message);
            }
        };
        fetchCourses();
    }, []);

    const handleEnroll = async (courseId) => {
        try {
            const response = await axios.post('http://localhost:5000/api/enrollments', 
                { courseId },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            setMessage(`Successfully enrolled in course: ${response.data.courseId}`);
        } catch (error) {
            setMessage('Error enrolling in course: ' + (error.response ? error.response.data : error.message));
        }
    };

    return (
        <div>
            <h2>Course List</h2>
            {message && <p>{message}</p>}
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.title}
                        <button onClick={() => handleEnroll(course.id)}>Enroll</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
