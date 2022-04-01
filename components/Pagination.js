import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import InfoCard from '../components/InfoCard'

function Pagination({items}) {
    log
    const itemsPerPage = 5
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

  return (
    <div>
        <div>
        {
            currentItems?.map(({id, img, location, description, title, star}) => (
                <InfoCard 
                    key={id}
                    img={img}
                    location={location}
                    description={description}
                    title={title}
                    star={star}
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
    </div>
  )
}

export default Pagination
