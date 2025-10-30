import Header from './components/Header.jsx';
import HeroCover from './components/HeroCover.jsx';
import NewsSection from './components/NewsSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroCover />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
