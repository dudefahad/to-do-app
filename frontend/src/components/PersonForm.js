import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PersonForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/api/person/${id}`)
        .then(response => {
          setName(response.data.name);
          setEmail(response.data.email);
        })
        .catch(error => {
          console.error('There was an error fetching the person!', error);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { name, email };

    if (id) {
      axios.put(`http://localhost:3000/api/person/${id}`, person)
        .then(response => {
          navigate('/');
        })
        .catch(error => {
          console.error('There was an error updating the person!', error);
        });
    } else {
      axios.post('http://localhost:3000/api/person', person)
        .then(response => {
          navigate('/');
        })
        .catch(error => {
          console.error('There was an error creating the person!', error);
        });
    }
  };

  return (
    <div className="person-form">
      <h1>{id ? 'Edit Person' : 'Add Person'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default PersonForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const PersonForm = () => {
//   const { id } = useParams();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       axios.get(`http://localhost:3000/api/person/${id}`)
//         .then(response => {
//           setName(response.data.name);
//           setEmail(response.data.email);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the person!', error);
//         });
//     }
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const person = { name, email };

//     if (id) {
//       axios.put(`http://localhost:3000/api/person/${id}`, person)
//         .then(response => {
//           navigate('/');
//         })
//         .catch(error => {
//           console.error('There was an error updating the person!', error);
//         });
//     } else {
//       axios.post('http://localhost:3000/api/person', person)
//         .then(response => {
//           navigate('/');
//         })
//         .catch(error => {
//           console.error('There was an error creating the person!', error);
//         });
//     }
//   };

//   return (
//     <div>
//       <h1>{id ? 'Edit Person' : 'Add Person'}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <button type="submit">{id ? 'Update' : 'Add'}</button>
//       </form>
//     </div>
//   );
// };

// export default PersonForm;
