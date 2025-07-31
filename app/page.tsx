import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SideTabs from '@/components/SideTabs';

export default function Home() {
  return (
    <>
      <Header />
      <SideTabs /> 
      <main> {/* чтоб не перекрыть хедером */}
        <Hero />
        {/* дальше добавишь <Features /> и другие секции */}
      </main>
      <Footer />
    </>
  );
}
