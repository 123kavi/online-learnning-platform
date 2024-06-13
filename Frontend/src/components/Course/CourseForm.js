// import React, { useState, useContext } from 'react';
// import api from '../../services/api';
// import { AuthContext } from '../../contexts/AuthContext';
// import { useHistory } from 'react-router-dom';

// const CourseForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const { auth } = useContext(AuthContext);
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/courses', { title, description });
//       history.push('/courses');
//     } catch (error) {
//       console.error('Error adding course', error);
//     }
//   };

//   if (!auth || auth.role !== 'admin') {
//     return <p>Access denied. Only admins can add courses.</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Course</h2>
//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default CourseForm;
