// import React, { useState } from 'react';
// import axios from 'axios';

// const AddCourse = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       await axios.post('/api/courses', { name, description }, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       // Handle success (e.g., redirect to courses page)
//     } catch (err) {
//       console.error(err);
//       // Handle error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Course Name" />
//       <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description"></textarea>
//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default AddCourse;
