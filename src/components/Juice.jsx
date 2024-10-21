import React, { useEffect, useState } from 'react';
import '../Css/juices.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayJuices = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://raza-juice-api.onrender.com/Raza/Juices') // Use the full URL
      .then((res) => {
        console.log('API Response:', res.data); // Log the response data
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error getting juice data:', err);
        setError('Failed to load juice data. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading juices...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <center><h2 className="heading">POPULAR JUICES</h2></center>
      <p>You can order all types of dry fruits, juices, Mastani Laasi, etc. from us. If you want to contact us, please fill out our form below. Thank you for visiting our website.</p>

      <div className="dishes_container">
        {Array.isArray(data) ? (
          data.map(element => (
            <div className="Main-Menuback" key={element._id}>
              <Link to={'/MakeReservation'}>
                <img src={element.Image} alt={`Image of ${element.JuiceName}`} className='imgsize' />
              </Link>
              <center><h3>{element.JuiceName}</h3></center>
              <center><p>Juice Rate: {element.Price} ₹</p></center>
            </div>
          ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    </div>
  );
};

export default DisplayJuices;
