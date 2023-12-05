import { useState } from "react";
import { useDispatch } from "react-redux";
import '../../assets/styles/search.scss';
import { setCurrentPage, setSearch } from "../../redux/action-creators";

const Search = () => {
  const dispatch = useDispatch()
  const [search, setSearchInput] = useState('')
  const handleInput = (e: any) => {
    setSearchInput(e.target.value)
  }
  return (
    <div className="container-search">
      <input className="search-input" type="text" value={search} onChange={(e: any) => handleInput(e)} placeholder="Programming"/>
      <button 
        className="search-btn"
        onClick={() => {
          if(search !== '') {
            dispatch(setSearch(search))
            dispatch(setCurrentPage(1))
            window.location.pathname = `/search/${search}`
          } 
        }}
      > 
        Search 
      </button>
    </div>
  );
}

export { Search };

