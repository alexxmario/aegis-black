import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-midnight via-black to-black text-brand-ivory">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
