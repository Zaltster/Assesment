"use client";
import Link from 'next/link';

const HomePage = () => (
  <div style={{ position: 'relative', height: '100vh' }}>
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      fontSize: '50px',
      color: 'blue',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Link href="/dashboard">Dashboard</Link>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Welcome to the Home Page</h1>
      <Link href="/dashboard" style={{ fontSize: '30px', marginTop: '20px', color: 'green' }}>Go to Dashboard</Link>
    </div>
  </div>
);

export default HomePage;
