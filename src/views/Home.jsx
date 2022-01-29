import React, { Suspense } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Home</h2>
      <Link to="/portfolio">Portfolio</Link>
    </main>
  );
}
