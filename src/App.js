import './App.css';

import React from 'react';
import {Route, Link, Routes, Navigate} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/does-not-exist">Catch all route</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          {/* 👇️ Redirect to /dashboard when the user goes to / */}
          <Route
            path="/"
            element={<Navigate to="/dashboard" />}
          />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

          {/* 👇️ Only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function About() {
  return <h2>About</h2>;
}
