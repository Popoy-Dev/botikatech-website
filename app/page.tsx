import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { UserProof } from '@/components/UserProof';
import { HowToActivate } from '@/components/HowToActivate';
import { Pricing } from '@/components/Pricing';
import { Download } from '@/components/Download';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UserProof />
        <HowToActivate />
        <Pricing />
        <Download />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
