import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Row } from "../../../Row"
import { loadSearch } from "../../../redux/action-creators"
import { IStoreState } from "../../../types"
import { Header } from "../../Header"
import { Pagination } from "../../Pagination"
import { SearchRow } from "./SearchRow"

const SearchData = () => {
  const limit = useSelector((state: IStoreState) => state.books.limit)
  const currentPage = useSelector((state: IStoreState) => state.books.currentPage)
  const searchResult: any = useSelector((state: IStoreState) => state.books.searchResult)
  const total = useSelector((state: IStoreState) => state.books.total)
  const search = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSearch({
      search,
      limit,
      currentPage
    }))
  }, [search, limit, currentPage])
  return (
    <>
      <Header/>
      <section className="container-searchResult">
        <h1 className="container-searchResult__title">
          Here's what we found for {`"${search}"`} 
        </h1>
        <p>Around {total} matches in total</p>
        {searchResult !== undefined ? Row(searchResult).map((el: any) =>
          <SearchRow 
            key = {el.reduce((prev: string, cur: any) => prev+ '.' + cur.isbn13, '')} 
            books = {el} 
          /> )
          : 
          ''
        }
        <Pagination/>
      </section>
    </>
  )
}

export { SearchData }

