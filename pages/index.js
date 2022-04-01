import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
import ExploreData from '../fakeExploreData';
import DiscoverData from '../fakeDiscoverData';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Travel Sri Lanka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Top Destinations</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              ExploreData?.map(({id, img, location}) => (
                <SmallCard img={img} location={location} key={id} id={id} />
              ))
            }
          </div>
        </section>

        <section className='mt-10'>
          <h2 className='text-4xl font-semibold pb-8'>Discover</h2>
          <div className='flex space-x-8 overflow-scroll scrollbar-hide p-3'>
            {
              DiscoverData?.map(({id, img, title, tag}) => (
                <MediumCard img={img} title={title} key={id} tag={tag} />
              ))
            }
          </div>
        </section>

        <LargeCard 
          img="https://media.istockphoto.com/vectors/beach-vector-id1145054673?k=20&m=1145054673&s=612x612&w=0&h=IA7nVNyRmUmB1MYhZqUtYRKY59GV3bj4wocgiYobAMs=" 
          title="The Greatest Outdoors"
          description="Discover the most incredible places in Sri Lanka"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

/*export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}*/
