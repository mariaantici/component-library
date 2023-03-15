import DefaultLayout from '@/layouts/DefaultLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Component gallery</title>
        <meta name="description" content="Discover my personal component gallery built with Next.js and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultLayout>
        <h1 className='py-80'>This is H1 heading</h1>
      </DefaultLayout>
    </>
  )
}
