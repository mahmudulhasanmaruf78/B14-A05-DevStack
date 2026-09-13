import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TechnologiesSection from './components/TechnologiesSection'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchTechnologies = async () => {
      try {
        setLoading(true)
        const response = await fetch('/technologies.json')
        if (!response.ok) {
          throw new Error(`Failed to load technologies: ${response.status}`)
        }
        const data = await response.json()
        if (isMounted) {
          setTechnologies(data)
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          console.error(err)
          setError('Failed to load technologies. Please try again later.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchTechnologies()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-base-content">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 space-y-16 px-4 py-10 sm:px-6 lg:px-8">
        <HeroSection />

        <TechnologiesSection
          technologies={technologies}
          loading={loading}
          error={error}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
