import type { NextPage } from "next"
import Head from "next/head"

const Env: NextPage = () => {
  const appName = process.env.APP_NAME

  return (
    <div>
      <Head>
        <title>ENV Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        <div className="flex flex-col m-5 p-4 shadow drop-shadow-lg">
          <h1 className="text-center text-2xl font-bold underline">ENV</h1>
          <div className="">{appName}</div>
        </div>
      </div>
    </div>
  )
}

export default Env
