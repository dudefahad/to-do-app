import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/person/${id}`)
      .then(response => {
        setPerson(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the person!', error);
      });
  }, [id]);

  if (!person) return <div>Loading...</div>;

  return (
    <div className="person-details">
      <h1>{person.name}</h1>
      <p>Email: {person.email}</p>
      <Link to="/" className="btn btn-primary">Back to List</Link>
    </div>
  );
};

export default PersonDetails;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const PersonDetails = () => {
//   const { id } = useParams();
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/person/${id}`)
//       .then(response => {
//         setPerson(response.data[0]);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the person!', error);
//       });
//   }, [id]);

//   if (!person) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{person.name}</h1>
//       <p>{person.email}</p>
//     </div>
//   );
// };

// export default PersonDetails;
