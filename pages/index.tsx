import Link from 'next/link'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/terms-of-service">
        <a>Terms of Service</a>
      </Link>
    </div>
  )
}

export default Home
