import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import InfoCard from '../components/InfoCard'
import ReactPaginate from 'react-paginate';

function Search({searchResults}) {
    const router = useRouter();
    const {location, experience} = router.query;

    const itemsPerPage = 5
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        
        setCurrentItems(searchResults.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(searchResults.length / itemsPerPage));

        return () => {
            setCurrentItems(searchResults)
        }
    }, [location, experience, itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % searchResults.length;
        setItemOffset(newOffset);
    };

  return (
    <div>
      <Header />
      <main className='flex max-w-7xl mx-auto'>
          <section className='flex-grow pt-14 px-6'>
              <p className='text-xs'> {searchResults.length} places to explore for this destination</p>
              <h1 className='text-3xl font-semibold mt-2 mb-6'>
                {
                    location ? `Explore ${location}` : experience ? `Discover Sri Lankan ${experience}` : `Experience the beauty of Sri Lanka`
                }
              </h1>

              <div className='flex flex-col'>
              {
                  currentItems?.map(({id, img, location, description, title, star}) => (
                      <InfoCard 
                        key={id}
                        img={img}
                        location={location}
                        description={description}
                        title={title}
                        star={star}
                        id={id}
                      />
                  ))
              }
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                className='pagination'
            />
          </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
    const { location, experience } = context.query;
    let searchResults = []

    if (location) {
        searchResults = await fetch(`https://my-json-server.typicode.com/nuwandi/destinations-api/destinations?location=${location}`)
        .then(res => res.json());
    } else {
        searchResults = await fetch(`https://my-json-server.typicode.com/nuwandi/destinations-api/destinations`)
        .then(res => res.json());

        if (experience) {
            for (let i = 0; i < searchResults.length; i++) {
                if (experience && !Object.values(searchResults[i].tags).includes(experience)) {
                    delete searchResults[i]
                };
            }
    
            const results = searchResults.filter(element => {
                if (Object.keys(element).length !== 0) {
                    return true;
                }
            });

            searchResults = results
        }
    }

    return {
        props: {
            searchResults
        }
    }
}
