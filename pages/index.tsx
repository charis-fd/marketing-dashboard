import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const MarketingDashboard = dynamic(
  () => import('../components/ui/MarketingDashboard'),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Marketing Budget Dashboard</title>
        <meta name="description" content="Marketing Budget Dashboard" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <MarketingDashboard />
      </main>
    </div>
  )
}

export default Home
