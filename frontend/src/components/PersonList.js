import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/person')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the persons!', error);
      });
  }, []);

  const deletePerson = (id) => {
    axios.delete(`http://localhost:3000/api/person/${id}`)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the person!', error);
      });
  };

  return (
    <div className="person-list">
      <h1>Person List</h1>
      <Link to="/add" className="btn">Add Person</Link>
      <ul>
        {persons.map(person => (
          <li key={person.id} className="person-item">
            <div>
              <strong>{person.name}</strong> - {person.email}
            </div>
            <div className="person-actions">
              <Link to={`/details/${person.id}`} className="btn btn-info">Details</Link>
              <Link to={`/edit/${person.id}`} className="btn btn-warning">Edit</Link>
              <button onClick={() => deletePerson(person.id)} className="btn btn-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const PersonList = () => {
//   const [persons, setPersons] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/person')
//       .then(response => {
//         setPersons(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the persons!', error);
//       });
//   }, []);

//   const deletePerson = (id) => {
//     axios.delete(`http://localhost:3000/api/person/${id}`)
//       .then(response => {
//         setPersons(persons.filter(person => person.id !== id));
//       })
//       .catch(error => {
//         console.error('There was an error deleting the person!', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Person List</h1>
//       <Link to="/add">Add Person</Link>
//       <ul>
//         {persons.map(person => (
//           <li key={person.id}>
//             {person.name} - {person.email}
//             <Link to={`/edit/${person.id}`}>Edit</Link>
//             <button onClick={() => deletePerson(person.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PersonList;
