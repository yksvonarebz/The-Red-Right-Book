import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../../../assets/styles/selectedBook.scss';
import { loadBook, setBookInBasket } from "../../../redux/action-creators";
import { IStoreState } from "../../../types";
import { ActiveTab } from "../../ActiveTab";
import { Header } from "../../Header";
import { TableWithInfoBook } from "../../TableWithInfoBook";

const SelectedBook = () => {
  const selectedBook: any = useSelector((state: IStoreState) => state.books.selectedBook);
  const dispatch = useDispatch();
  const {id}: any = useParams()
  useEffect(() => {
    dispatch(loadBook(Number(id)))
  }, [id])
  return (
    <>
      <Header/>
      <div className="container-selectedBook">
        <div className="block-w-book">
          <div className="left-block">
            <img className="left-block_image" src={selectedBook?.image} alt="book"/>
            <div className="left-block_btn-buy">
              <a href={selectedBook?.url}>Buy now</a>
            </div>
            <button className="left-block_btn-add-basket" onClick={() => {
                return dispatch(setBookInBasket(selectedBook?.isbn13))
              }}
            >
              Throw to basket
            </button>
          </div>
          <div className="right-block">
            <TableWithInfoBook/>
            <ActiveTab/>
          </div>
        </div>
      </div>
    </>
  )
}

export { SelectedBook };

