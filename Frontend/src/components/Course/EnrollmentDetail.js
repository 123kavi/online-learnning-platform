// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const EnrollmentDetail = () => {
//     const { id } = useParams();
//     const [enrollment, setEnrollment] = useState(null);
//     const [message, setMessage] = useState('');
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false);

//     useEffect(() => {
//         const fetchEnrollment = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/enrollments/${id}`, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('token')}`,
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 setEnrollment(response.data);
//                 // Check if the user is already enrolled and disable the button if true
//                 if (response.data) {
//                     setIsButtonDisabled(true);
//                 }
//             } catch (error) {
//                 setMessage('Error fetching enrollment: ' + (error.response ? error.response.data : error.message));
//             }
//         };
//         fetchEnrollment();
//     }, [id]);

//     const handleEnrollClick = async () => {
//         try {
//             const response = await axios.post(`http://localhost:5000/api/enrollments`, { courseId: id }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             setEnrollment(response.data);
//             setIsButtonDisabled(true); // Disable the button after successful enrollment
//             setMessage('Successfully enrolled!');
//         } catch (error) {
//             setMessage('Error enrolling: ' + (error.response ? error.response.data : error.message));
//         }
//     };

//     return (
//         <div>
//             <h2>Enrollment Detail</h2>
//             {message && <p>{message}</p>}
//             {enrollment ? (
//                 <div>
//                     <h3>Course Title: {enrollment.Course.title}</h3>
//                     <p>Enrollment ID: {enrollment.id}</p>
//                     <p>Course ID: {enrollment.courseId}</p>
//                     <p>User ID: {enrollment.userId}</p>
//                     <button
//                         onClick={handleEnrollClick}
//                         disabled={isButtonDisabled}
//                         style={{ backgroundColor: isButtonDisabled ? 'red' : 'green', color: 'white' }}
//                     >
//                         {isButtonDisabled ? 'Enrolled' : 'Enroll'}
//                     </button>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default EnrollmentDetail;
