import type { NextPage } from 'next'
import MarketingDashboard from '../components/ui/MarketingDashboard'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <MarketingDashboard />
      </main>
    </div>
  )
}

export default Home
