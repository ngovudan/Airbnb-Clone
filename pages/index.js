import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Dan T Airbnb</title>
        <link rel='icon' href='/airbnb.png' />
      </Head>

      <Header />
      <Banner />
      <main className='mx-auto px-8 sm:px-16 max-w-[1750px]'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }, index) => (
              <SmallCard
                key={index}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: { exploreData, cardsData }
  }
}
