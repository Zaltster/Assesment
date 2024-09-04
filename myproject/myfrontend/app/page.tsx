import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <Link href="/dashboard">Go to Dashboard</Link>
  </div>
);

export default HomePage;