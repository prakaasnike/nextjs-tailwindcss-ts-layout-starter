import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">
          <span className="text-gray-900">Tailwindcss{' '}</span>
          <a className="text-blue-600 font-extrabold" href="https://nextjs.org">
            Next.js
          </a>
          {' '}Layout Starter
        </h1>

        <p className="mt-10 text-2xl">
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Get Started
          </code>
        </p>

      </main>

    </div>
  )
}

export default Home
