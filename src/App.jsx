import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TechnologiesSection from './components/TechnologiesSection'
import StackSidebar from './components/StackSidebar'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
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

  // Child to Parent: Add technology to stack (with duplicate check & warning alert)
  const handleAddToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warn(`${technology.name} is already in your stack!`)
      return
    }
    setStack((prev) => [...prev, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  // Remove single technology from stack with notification
  const handleRemoveFromStack = (technologyId) => {
    const itemToRemove = stack.find((item) => item.id === technologyId)
    setStack((prev) => prev.filter((item) => item.id !== technologyId))
    toast.info(`${itemToRemove?.name || 'Technology'} removed from your stack.`)
  }

  // Clear entire stack at once with notification
  const handleClearAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-base-content">
      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 space-y-16 px-4 py-10 sm:px-6 lg:px-8">
        <HeroSection />

        {/* Main Content Area: Technologies Grid + Stack Sidebar */}
        <section className="grid gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1.6fr_0.9fr]">
          <div className="min-w-0">
            <TechnologiesSection
              technologies={technologies}
              loading={loading}
              error={error}
              stack={stack}
              onAdd={handleAddToStack}
            />
          </div>

          <div>
            <StackSidebar
              stack={stack}
              onRemove={handleRemoveFromStack}
              onClearAll={handleClearAll}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
