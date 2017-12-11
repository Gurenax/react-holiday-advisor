import React from 'react'

const SearchForm = ({
  search,
  onChangeSearchListings,
}) => {
  return (
    <form>
      <div className="form-group">
        <input type="text" className="form-control" name="keyword" id="keyword" placeholder="Search Destination" value={search.keywords} onChange={onChangeSearchListings} />
      </div>
      <div className="form-group row">
        <div className="col">
          <select className="form-control" name="priceRange" id="priceRange">
            <option>$0 - $1000</option>
            <option>$1000 - $5000</option>
            <option>$5000 - $10000</option>
            <option>$10000 - $50000</option>
            <option>Above $50000</option>
          </select>
        </div>
        <div className="col">
          <input type="text" className="form-control" name="location" id="location" placeholder="Location"/>
        </div>
      </div>
    </form>
  )
}

export default SearchForm