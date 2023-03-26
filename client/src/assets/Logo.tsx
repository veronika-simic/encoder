import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/login" className="absolute mt-4 ml-4 text-4xl font-bold">
      ENCODER
    </Link>
  );
}
