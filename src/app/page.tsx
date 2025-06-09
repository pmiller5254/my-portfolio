import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Hero />
      </main>
    </PageTransition>
  );
}
