import React from  'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Página Home</h1>
      <Link to="/about">Sobre</Link>
    </div>
  )
}

export default Home;