import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-base-content">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <HeroSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
