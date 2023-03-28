import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/login" className="text-4xl font-bold">
      ENCODER
    </Link>
  );
}
