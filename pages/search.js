import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import Head from 'next/head'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

function Search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
      <Head>
        <title>Dan T Airbnb</title>
        <link rel='icon' href='/airbnb.png' />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
          <div className='flex flex-col'>
            {searchResults?.map((item, index) => (
              <InfoCard
                key={index}
                img={item.img}
                description={item.description}
                location={item.location}
                price={item.price}
                star={item.star}
                title={item.title}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults
    }
  }
}
